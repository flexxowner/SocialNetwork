export class RightMenu {
    constructor() {
        this.follows = [
            {name: "Roman"},
            {name: "John"},
            {name: "James"},
        ];

        this.news = [
            {title: "How does Roman become a frontend developer?! "},
            {title: "The Bishop Who Pleaded With Trump: ‘Was Anyone Going to Say Anything?’"},
            {title: "Thailand Celebrates New Same-Sex Marriage Law With Mass Wedding’"}
        ]

        this.init();
    }

    init() {
        $(document).ready(() => {
            this.loadFollows();
            this.loadNews();
        });
    }

    loadFollows(){
        this.follows.forEach(follow => {
            const followHtml = this.getFollowHtml(follow);
            $("#follow").append(followHtml);
        });
    }

    loadNews() {
        this.news.forEach(info => {
            const newsHtml = this.getNewsHtml(info);

            $("#news").append(newsHtml);
        })
    }

    getNewsHtml(info){
        return `
        <div class="container-fluid">
           <div class="row pt-3">
             <h1 class="title">${info.title}</h1>
           </div>
        </div>
        `;
    }

    getFollowHtml(follow) {
        return `
        <div class="container-fluid">
          <div class="row p-3">
            <div class="col-3">
              <i class="fa-regular fa-circle-user rounded-circle me-3"></i>
            </div>
            <div class="col-6">
              <h1>${follow.name}</h1>
            </div>
            <div class="col-3">
              <button class="btn btn-sm btn-primary ms-auto">+</button>
            </div>
          </div>
        </div>
        `;
    }
}
