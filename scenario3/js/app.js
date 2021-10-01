// let root = document.getElementsByClassName('root') [0];
let style = document.createElement('style');
let root = document.createElement('div');
let body = document.getElementsByTagName('body') [0]
let card = document.createElement('section');
let html = `
<div class="card__wrapper">
<img src="https://randomuser.me/api/portraits/men/35.jpg" class="card__user-img">
<div class="card__info">
    <span class="card__name">Matt Williams</span>
    <span class="card__title">UI/UX Designer</span>
</div>
<div class="card__socials">
    <div class="card__icon card__icon--fb">
        <span class="card__icon-box">
            <i class="fab fa-facebook-f"></i>
        </span>
        <span class="card__icon-title">
            Facebook
        </span>
    </div>
    <div class="card__icon card__icon--ig">
        <span class="card__icon-box">
            <i class="fab fa-instagram"></i>
        </span>
        <span class="card__icon-title">
            Instagram
        </span>
    </div>
    <div class="card__icon card__icon--db">
        <span class="card__icon-box">
            <i class="fab fa-dribbble"></i>
        </span>
        <span class="card__icon-title">
            Dribbble
        </span>
    </div>
</div>
</div>
`;
let cssStyles = `
.card {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
}
.card__wrapper {
    height: 400px;
    padding: 20px;
    max-width: 300px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card__user-img {
    border: 2px solid #e02a0a;
    height: 70px;
    width: 70px;
    margin: 2rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}
.card-info {
    margin-bottom: 2rem;
}
.card__name {
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
}
.card__title {
    display: block;
    font-size: .7rem;
    margin-bottom: 2rem;
    text-align: center;
}
.card__icon {
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000;
    margin-bottom: .4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    transition: background .3s ease-in-out, color .3s ease-in-out;
    cursor: pointer;
}
.card__icon-box {
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card__icon-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.card__icon--fb {
    color: #2c5eff;
    border: 1px solid #2c5eff;
}
.card__icon--fb:hover {
    background: #2c5eff;
    color: white;
}
.card__icon--ig {
    color: #773fe7;
    border: 1px solid #773fe7;
}
.card__icon--ig:hover {
    background: #773fe7;
    color: white;
}
.card__icon--db {
    color: #f962b1;
    border: 1px solid #773fe7;
}
.card__icon--db:hover {
    background: #f962b1;
    color: white;
}
`;


body.prepend(root);
root.classList.add('root');
card.classList.add('card');
root.prepend(card);
root.style.cssText = ` 
background: url('https://th.bing.com/th/id/R.9b188f49b38196458520247b2be7e478?rik=2z%2fMGL1hGeAVZg&pid=ImgRaw&r=0');
background-size: cover; 
background-position: center;
`;
document.getElementsByClassName('card') [0].innerHTML = html;
