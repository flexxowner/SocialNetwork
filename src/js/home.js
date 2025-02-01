import {v4 as uuidv4} from 'https://jspm.dev/uuid';

export class HomePage{
    constructor() {
        this.friendsStory = [
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
            { name: "Judy Nguen", path: "assets/profile-bg-plug.jpg"},
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
            { name: "Judy Nguen", path: "assets/avatar-plug.jpg"},
        ];
        this.posts = [
            { id: "1p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "2p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "3p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "4p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "5p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "6p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "7p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0 },
            { id: "8p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "9p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10, commentsCount: 0  },
            { id: "10p", avatar: "assets/avatar-plug.jpg", name: "Lori Ferguson", position: "Web developer", content: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.", likesCount: 10,commentsCount: 0  },
        ];
        this.comments = [
            { postId: "1p", avatar: "assets/woman.png", name: "Jessica Big T", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 5 },
            { postId: "1p", avatar: "assets/woman.png", name: "Jessica Big T", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 5 },
            { postId: "2p", avatar: "assets/account.png", name: "Roman Fisherman", comment: "See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.", likesCount: 10 },
            { postId: "3p", avatar: "assets/woman.png", name: "Fried Chicken", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 355 },
            { postId: "4p", avatar: "assets/account.png", name: "Capitan Price", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 851 },
            { postId: "5p", avatar: "assets/account.png", name: "Sigma Boy", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 124},
            { postId: "6p", avatar: "assets/woman.png", name: "Maus E100", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 99 },
            { postId: "7p", avatar: "assets/woman.png", name: "Maus E100", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 99 },
            { postId: "8p", avatar: "assets/woman.png", name: "Maus E100", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 99 },
            { postId: "9p", avatar: "assets/woman.png", name: "Maus E100", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 99 },
            { postId: "10p", avatar: "assets/woman.png", name: "Maus E100", comment: "Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.", likesCount: 99 },
        ];

        this.user = { name: "Roman Voskoboynikov", avatar: "assets/avatar-plug.jpg", content: "", position: "FullStack" }

        toastr.options = {
            "closeButton": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
        };

        this.init();
    }

    init() {
        $(document).ready(() => {
            this.renderStorySlider();
            this.renderPostsFeed();
            this.subscribeToSendButton();
        });
    }

    renderPage(){
        return `
           <div class="stories-container">
               <button type="button" id="post-story-btn" class="story-button">
                 <div class="plus-circle">+</div>
                 <p>Post a story</p>
               </button>
           <div class="swiper" id="swiper">
             <!-- Additional required wrapper -->
             <div class="swiper-wrapper" id="swiper-wrapper"></div>
             <div class="swiper-scrollbar"></div>
           </div>
           </div>
           <div class="twit-area border border-1">
             <div class="twit">
               <img src="/assets/avatar-plug.jpg"/>
               <textarea id="post-content" class="ms-3" placeholder="Share your thoughts..."></textarea>
             </div>
             <div class="d-flex">
                <div class="flex-grow-1">
                  <button type="button" id="post-photo-btn" class="btn btn-light btn-sm me-3"><i class="fa-regular fa-image me-2"></i>Photo</button>
                  <button type="button" id="post-video-btn" class="btn btn-light btn-sm me-3"><i class="fa-solid fa-video me-2"></i>Video</button>
                  <button type="button" id="post-event-btn" class="btn btn-light btn-sm me-3"><i class="fa-solid fa-calendar-day me-2"></i>Event</button>
                  <button type="button" id="post-activity-btn" class="btn btn-light btn-sm me-3"><i class="fa-regular fa-face-smile me-2"></i>Feeling/Activity</button>
                </div>
                <button type="button" id="send-post-btn" class="btn btn-light btn-sm"><i class="fa-solid fa-paper-plane"></i></button>
             </div>
            </div>
           <div class="newsfeed" id="newsfeed"></div>
        `;
    }

    renderStorySlider(){
        const swiperWrapper = $("#swiper-wrapper");

        this.friendsStory.forEach((story) => {
            const storyHtml = this.getStoryHtml(story);
            swiperWrapper.append(storyHtml);
        });

        new Swiper(".swiper", {
            slidesPerView: 3,
            spaceBetween: 10,
            scrollbar: {
                el: ".swiper-scrollbar",
                dragSize: 190,
                hide: false,
                draggable: true,
            },
        });
    }

    renderPostsFeed(){
        this.posts.forEach(post => {
           const postHtml = this.getFeedHtml(post);
           $("#newsfeed").append(postHtml);

            const commentsContainer = $(`#comments-${post.id}`);

            this.comments.forEach(comment => {
                if (comment.postId === post.id) {
                    const commentHtml = this.getCommentsHtml(comment);
                    commentsContainer.append(commentHtml);
                    post.commentsCount += 1;
                }
            });

            $(`#comment-btn-${post.id}`).text(`Comments ${post.commentsCount}`);
        });
    }

    getStoryHtml(story){
        return `
        <div class="swiper-slide">
          <img src="${story.path}">
          <div class="overlay">${story.name}</div>
        </div>
        `;
    };

    getFeedHtml(post) {
        return `
        <div class="card shadow-sm mb-3">
          <!--Header - User info-->
          <div class="card-header border-0 bg-white d-flex align-items-center">
            <img src="${post.avatar}" class="rounded-circle me-2" width="45" height="45">
            <div class="flex-grow-1">
              <h6 class="m-0 fw-bold">${post.name}</h6>
              <small class="text-muted">${post.position}</small>
            </div>
            <button class="btn btn-light btn-sm"><i class="fas fa-ellipsis-h"></i></button>
          </div>
          
           <!--Content-->
           <div class="card-body">
             <p>${post.content}</p>
           </div>
           
           <!--Actions-->
           <div class="card-footer bg-white">
             <!--Action buttons-->
             <div class="d-flex justify-content-around pb-2">
               <div class="flex-grow-1">
                 <button id="like-btn" class="btn btn-light bg-white btn-sm"><i class="fa-regular fa-thumbs-up"></i> Liked ${post.likesCount}</button>
                 <button id="comment-btn-${post.id}" class="btn btn-light bg-white btn-sm"><i class="fa-regular fa-comment"></i> Comments ${post.commentsCount}</button>
               </div>
               <button class="btn btn-light bg-white btn-sm"><i class="fa-solid fa-share"></i> Share (3)</button>
             </div>
             <!--Add comment-->
             <div class="d-flex align-items-center mt-3">
               <img src="${post.avatar}" class="rounded-circle me-2" width="35" height="35">
               <input type="text" class="form-control rounded-pill ps-3" placeholder="Add a comment...">
             </div>
             
            <!--Comments-->
            <div class="mt-3" id="comments-${post.id}">

            </div>
           </div>
        </div>
        `;
    }

    getCommentsHtml(comment){
        return `
        <div class="d-flex">
          <img src="${comment.avatar}" class="rounded-circle me-2" width="35" height="35">
          <div class="bg-light p-3 rounded w-100">
            <h6 class="m-0 fw-bold">${comment.name}</h6>
            <p class="mt-2 small">${comment.comment}</p>
            <div class="d-flex col">
              <button id="like-btn" class="btn btn-light bg-white btn-sm"><i class="fa-regular fa-thumbs-up"></i> Like</button>
              <button id="like-btn" class="btn btn-light bg-white btn-sm ms-2"><i class="fa-solid fa-reply"></i> Reply</button>
            </div>
          </div>
        </div>`;
    };

    subscribeToSendButton() {
        $("#send-post-btn").on("click", () => {
            try {
                this.user.content = $("#post-content").val();
                const newPost = {
                    id: uuidv4(),
                    avatar: this.user.avatar,
                    name: this.user.name,
                    position: this.user.position,
                    content: this.user.content,
                    likesCount: 0,
                    commentsCount: 0,
                };
                this.posts.push(newPost);
                const postHtml = this.getFeedHtml(newPost);
                $("#newsfeed").prepend(postHtml);
                toastr.success('The post has been successfully published!');
            }
            catch(e) {
                toastr.options.onShown = function() { console.log(e); }
                toastr.error('Error! Post not published');
            }
        });
    }
}