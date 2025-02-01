export class RightMenu {
    constructor() {
        this.follows = [
            {name: "Judy Nguyen", position: "News anchor"},
            {name: "Amanda Reed", position: "Web Developer"},
            {name: "Billy Vasquez", position: "News anchor"},
            {name: "Lori Ferguson", position: "Web Developer at Google"},
            {name: "Carolyn Ortiz", position: "News anchor"},
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

            $("#add-follower").click(function () {
                $(this).find("i").removeClass("fa-plus").addClass("fa-user-check");
            });
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
             <h1 class="news-text">${info.title}</h1>
           </div>
        </div>
        `;
    }

    getFollowHtml(follow) {
        return `
          <div class="new-follower">
            <div>
              <img id="follow-avatar" src="/assets/avatar-plug.jpg">
            </div>
            <div class="follower-info">
                <h2>${follow.name}</h2>
                <p>${follow.position}</p>
            </div>
            <button id="add-follower" class="btn-primary add-follower-btn"><i id="add-icon" class="fa-solid fa-plus"></i></button>
          </div>
        `;
    }
}
