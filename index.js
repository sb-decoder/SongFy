
let song=[
    {songName: "Kishore Kumar's Song", filePath: "1.mp3"},
    {songName: "Arijit Singh's Song", filePath: "2.mp3"},
    {songName: "Shreya Ghoshal's Song", filePath: "3.mp3"},
    {songName: "Palak Muchhal's Song", filePath: "4.mp3"},
    {songName: "Justin Bieber's Song", filePath: "5.mp3"},
    {songName: "Darshan Raval's Song", filePath: "6.mp3"}
]
let masterPlay=document.getElementById('masterPlay');
let songIndex = 0;
let audioelement = new Audio('1.mp3');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

let MasterSongName = document.getElementById('MasterSongName');
audioelement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})
masterPlay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity = 0;
        
    }
})
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('ftt')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })   
}
Array.from(document.getElementsByClassName('ftt')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `${songIndex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        MasterSongName.innerText=song[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    });
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=5){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    MasterSongName.innerText=song[songIndex].songName;
    audioelement.src = `${songIndex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioelement.src = `${songIndex+1}.mp3`;
    MasterSongName.innerText=song[songIndex].songName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})