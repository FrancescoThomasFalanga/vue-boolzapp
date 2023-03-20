const { createApp } = Vue

createApp({
  data() {
    return {
      
        oldIcon: "fa-solid fa-microphone",
        newIcon: "fa-solid fa-paper-plane",
        isWrite: "Sta scrivendo...",
        isOnline: "Online",
        lastAccess: "Ultimo accesso oggi alle: ",
        // new message init
        newMessage: {date: this.getDate(), message: '', status: 'sent'},
        // new responde init
        newResponse: {date: this.getDate(), message: 'Ok!', status: 'received'},
        // index most important thing for the index of the array / object
        isClick: 0,
        // init the response at 0 or null, it's the same
        response: 0,
        // this one helps for filtering  the searchBar by Name
        search: "",
        // object into array into array into object :) :) :) :) :)
        items: [
            { info: 'Message info' },
            { delete: 'Delete message', },
        ],
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '16:30',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '16:35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '10:10',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '10:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
                        message: 'Ah scusa!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '15:51',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '15:30',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '15:50',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '15:51',
                        message: 'OK!!',
                        status: 'received'
                    },
                ],
            }
        ],
        randomAnswers: [
            "Ciao come va?",
            "Si tutto bene",
            "Come stai tu?",
            "No, ancora non ho ultimato",
            "Si, ultimamente faccio così",
            "Questa sera a cena fuori",
            "Per oggi non riesco...",
        ],
    }
  },


  methods: {
    
    // this one adds the newMessage from input
    addMessage() {

        if (this.newMessage.message == "" || this.newMessage.message == null) {
            console.log("Error Occured While SUBMIT");
        } else if (/^\s*$/.test(this.newMessage.message)){

            console.log("Error Occured While SUBMIT");

        } else {

            this.contacts[this.isClick].messages.push(this.newMessage);
            this.newMessage = {date: this.getDate(), message: '', status: 'sent'};

            this.responseTime();

        }

    },

    // this one adds the newMessage from the cocmputer in page
    responseTime() {

        this.responde = setTimeout(() => {

                this.randomAnswer();
                
                this.responseTimeStop();

        }, 1000);
    },

    // stop responde timer
    responseTimeStop() {
        clearTimeout(this.response);
    },

    // Hour and Minutes IRL
    getDate() {

        const today = new Date();
        const newDate = Intl.DateTimeFormat("it-IT", {

            hour: "numeric",
            minute: "numeric",

        }).format(today);

        return newDate;

    },
    
    //isWriting
    isWriting() {

        if (!this.newMessage.message == "" || !this.newMessage.message == null) {
            this.addMessage();
        };

    },

    // status
    status() {

        if (!this.newMessage.message == "" || !this.newMessage.message == null) {

            return this.isWrite;

        } else if (this.newMessage.message == "" || this.newMessage.message == null) {

            return this.lastAccess + this.getDate();

        }

    },

    // change icon while he's writing
    changeIcon() {

        if (!this.newMessage.message == "" || !this.newMessage.message == null) {
            return this.newIcon;
        } else {
            return this.oldIcon;
        }
    },

    // generate a random answer from computer while submit
    randomAnswer() {

        let randomIndex = Math.floor(Math.random() * 7);

        let message = {
            date: this.getDate(),
            message: this.randomAnswers[randomIndex],
            status: "received"
        };

        this.contacts[this.isClick].messages.push(message);

        message = {date: this.getDate(), message: this.randomAnswers[randomIndex], status: 'received'};

    },

    deleteChat() {

        this.contacts.splice(this.isClick, 1);

        this.isClick = 0;

    },

  },

  


  // filter for search bar
  computed: {

    filteredSearch() {
        return this.contacts.filter(contactName => contactName.name.toLowerCase().includes(this.search.toLowerCase()))
    }


  }

}).mount('#app')