var posts = [
    {
        title: "Bai Viet 1",
        img: "https://toquoc.mediacdn.vn/2020/6/22/du-lich-dong-nam-bo-57-du-lich-1-1550030609-width500height364-15928206233982049051161.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatem reprehenderit nemo exercitationem",
    },
    {
        title: "Bai Viet 1",
        img: "https://toquoc.mediacdn.vn/2020/6/22/du-lich-dong-nam-bo-57-du-lich-1-1550030609-width500height364-15928206233982049051161.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatem reprehenderit nemo exercitationem",
    },
    {
        title: "Bai Viet 1",
        img: "https://toquoc.mediacdn.vn/2020/6/22/du-lich-dong-nam-bo-57-du-lich-1-1550030609-width500height364-15928206233982049051161.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et voluptatem reprehenderit nemo exercitationem",
    },
];

var html = `<div class="posts">
${posts
    .map(function (post) {
        return `
<div class="post-item d-flex align-items-center justify-content-between">

    <img
    src="${post.img}"
    alt="${post.title}"
    class="img"
    />
    <div class="content">
        <h3 class="title">${post.title}</h3>
        <p class="desc">
        ${post.desc}
        </p>
    </div>

</div>`;
    })
    .join("")}


</div>
`;

document.write(html);
