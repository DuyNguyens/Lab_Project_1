let animegirlImages = [
    "https://scontent.fyyz1-1.fna.fbcdn.net/v/t39.30808-6/241788335_3426915400868181_5466018093250336610_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fJ8U3PNfpkEAX-mwjz9&_nc_ht=scontent.fyyz1-1.fna&oh=00_AT8fzpGsMDv0KtDL3sVbvcvG5Wcdw4PI-GtXbx2TB-dEpQ&oe=61FE04A8",
    "https://animeeverything.online/wp-content/uploads/2019/08/maxresdefault.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6722ea1a-d45e-476e-91a0-a76c4ae2681f/de5mvbu-7f98586e-126f-4319-a78e-a02d7c42f1fa.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3MjJlYTFhLWQ0NWUtNDc2ZS05MWEwLWE3NmM0YWUyNjgxZlwvZGU1bXZidS03Zjk4NTg2ZS0xMjZmLTQzMTktYTc4ZS1hMDJkN2M0MmYxZmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fes5WTtO5Q_wAQlezL7e465oaHkD6X-Oz1ydFTnZu08",
    "https://64.media.tumblr.com/4c0d6c02252c2a7c477f6cd2c477cc73/433e979bf1e6892c-b4/s1280x1920/37532f0258582fdb7795bc2316115933e5e52c30.jpg",
    "https://i.redd.it/xf0ivx4sbcd21.png",
    "https://cdn141.picsart.com/303490159273201.jpg?r1024x1024",
    "https://wallpaperaccess.com/full/4595710.png"
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor(Math.random() * animegirlImages.length)
    imgs[i].src = animegirlImages[randomImg]
}