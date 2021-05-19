export default class RequestHTTP {
    constructor(url, container) {
        this.url = url;
        this.container = document.querySelector(container);
        this.connect = this.connect.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    connect() {
        fetch(this.url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(element => {
                if (element.id < 5) {
                    this.renderComments(element);
                }
            });
        });
    }

    renderComments(data) {
        this.comentItem = document.createElement('div')
        this.comentItem.classList.add('comment__item');

        this.name = document.createElement('div');
        this.name.classList.add('comment__name')
        this.name.textContent = data.name;
        this.comentItem.appendChild(this.name);

        this.body = document.createElement('div');
        this.body.classList.add('comment__body');
        this.body.textContent = data.body;
        this.comentItem.appendChild(this.body);

        this.email = document.createElement('div');
        this.email.classList.add('comment__email');
        this.email.textContent = `Users email: ${data.email}`;
        this.comentItem.appendChild(this.email);
        
        this.container.appendChild(this.comentItem);
    }

    init() {
        document.addEventListener('load', this.connect())
    }
}