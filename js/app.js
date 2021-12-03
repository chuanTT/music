// function load () {

    // Khai báo biến
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    // lấy các element
    const music = $('.music');
    const poster = $(".poster")
    const heding = $('header h2');
    const poster__cd = $('.poster__cd');
    const audio = $('#audio')
    const play = $('.play');
    const drag = $('.tentacle__drag')
    const time__total = $('.time__total');
    const update_Minute = $('.update_Minute');
    const update_Seconds = $('.update_Seconds');
    const caret_right = $('.caret-right');
    const caret_left = $('.caret-left');
    const RanDom = $('.random');
    const redo = $('.redo');
    const Mute = $('.Mute');
    const InputRange = $('.RangeMute');
    const progressBar = $('#progressBar');
    const prosessMute = $('#prosessMute');
    
    

    // Khởi tạo giá trị
    let minute = 0;
    let secondsTime = 0;
    let Second;
    let Seconds = 0;
    let TestSeconds = 0;
    let Minutes = 0;
    let dem = 0;
    




    // thực hiện các công việc
    const Music = {
        curent_Index: 0,
        isPlaySong: false,
        isRanDom: false,
        isRedo: false,
        isTime: false,
        songs: 
        [
            {
                name: 'Gặp nhưng không ở lại',
                singer: 'Hiền hồ',
                image: 'image/hiền_hồ.jpg',
                path: '/audio/Gap Nhung Khong O Lai - Hien Ho.mp3',
                minute: 4,
                seconds: 36,
            },
            {
                name: 'Đêm nay không ngủ',
                singer: 'Karik',
                image: 'image/demnay.png',
                path: '/audio/Dem Nay Khong Ngu - Karik.mp3',
                minute: 3,
                seconds: 7,
            },
            {
                name: 'Không muốn yêu lại càng say đắm',
                singer: 'Mr.Siro',
                image: 'image/Mr.siro.jpg',
                path: '/audio/Khong Muon Yeu Lai Cang Say Dam - Mr Sir.mp3',
                minute: 5,
                seconds: 30,
            },
            {
                name: 'Lời xin lỗi vụng về',
                singer: 'Karik',
                image: 'image/VungVe.png',
                path: '/audio/Loi Xin Loi Vung Ve - Quan A_P.mp3',
                minute: 4,
                seconds: 43,
            },
            {
                name: 'Mlem Mlem',
                singer: 'Min x JustaTee x Yuno Bigboi',
                image: 'image/Mlem_Mlem.jpg',
                path: '/audio/Mlem Mlem - Min_ JustaTee_ Yuno Bigboi.mp3',
                minute: 3,
                seconds: 38,
            },
            {
                name: 'Người ta đâu thương em',
                singer: 'LyLy',
                image: 'image/Lyly.jpg',
                path: '/audio/Nguoi-Ta-Dau-Thuong-Em-LyLy.mp3',
                minute: 4,
                seconds: 33,
            },
            {
                name: 'Thiên Đàng',
                singer: 'Wowy x PhamDangAnhThu',
                image: 'image/ThiênĐàng.jpg',
                path: '/audio/ThienDangLive-WowyPhamDangAnhThu-.mp3',
                minute: 4,
                seconds: 04,
            },
            {
                name: 'Ngàn Yêu Thương Về Đâu',
                singer: 'Huy Vạc',
                image: 'image/137590.jpg',
                path: '/audio/Ngan Yeu Thuong Ve Dau - Huy Vac.mp3',
                minute: 3,
                seconds: 20,
            },
            {
                name: 'Anh Luôn Là Lí Do',
                singer: 'ERIK',
                image: 'image/anhluoncolido.png',
                path: '/audio/AnhLuonLaLyDo-ERIK-6916743.mp3',
                minute: 3,
                seconds: 42,
            },
            {
                name: 'Thở',
                singer: 'Da LAB, Juky San',
                image: 'image/tho.jpg',
                path: '/audio/Tho-DaLABJukySan-7002939.mp3',
                minute: 3,
                seconds: 58,
            },
            {
                name: 'Thiên Tình Sầu',
                singer: 'Phi SaiG',
                image: 'image/ThienTinhSau.png',
                path: '/audio/Thien Tinh Sau - Phi SaiG.mp3',
                minute: 3,
                seconds: 28,
            }
            
        ],
        defineproperty: function () {
            Object.defineProperty(this,'currentSong',{
                get: function () {
                    return this.songs[this.curent_Index];
                }
            })
        },
        render: function () {
            const  htmls = this.songs.map((song,index) => {
                return `
                    <div class="song ${index === this.curent_Index ? 'avtice': '' }">
                    <div class="song_poter" style="background-image:  url('${song.image}');"></div>
                    <div class="name_singer">
                        <h2 class="title">${song.name}</h2>
                        <div class="singer">${song.singer}</div>
                    </div>
                    <div class="ellipsis">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                ` 
            })
            $('.playlist').innerHTML = htmls.join("");
        },
        handerEvent: function () {
            const _this = this;
            const Song = $$('.song');
            console.log(Song);
            const DefautWidth = poster.offsetWidth;
                // Quay CD
            const DegPoterCD = poster__cd.animate([
                {  transform: 'rotate(360deg)' }
            ], {
                duration: 10000,
                iterations: Infinity
            })
            DegPoterCD.pause();

            // Lắng nghe sự kiện khi sroll;
            document.onscroll = function () {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const NewWidth = DefautWidth - scrollTop;

                poster.style.width = NewWidth > 0 ? NewWidth + 'px' : 0;
                poster.style.opacity = NewWidth / DefautWidth;
            }

            // sự kiện click
            play.onclick = function (e) {
                if(_this.isPlaySong) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }

            // xử lí sự kiện audio được play
            audio.onplay = function () {
                _this.isPlaySong = true;
                music.classList.add('Display');
                DegPoterCD.play();
            }

            // xử lí sự kiện audio bị pause
            audio.onpause = function () {
                _this.isPlaySong = false;
                music.classList.remove('Display');
                DegPoterCD.pause();
            }

            // cập nhật thời gian
            audio.ontimeupdate = function () {
                // Tính phần trăm
                if (audio.duration) {
                    const progressPercent = Math.floor(
                      (audio.currentTime / audio.duration) * 100);
                      drag.value = progressPercent;
                      progressBar.style.left = -100 + progressPercent+'%';
                  }
                  Second = parseInt((audio.currentTime)%60);
                  Minutes = parseInt((audio.currentTime))
                 
                  if(Minutes % 60 == 0 &&Second % 60 == 0&&Minutes >= 60) {
                        minute = Minutes / 60;
                        update_Minute.innerHTML = minute < 10 ? `0${minute}`: minute;
                        update_Seconds.innerHTML = "00";

                  }
                  else {
                      update_Seconds.innerHTML = Second<10?`0${Second}`:Second;
                  }
            }

            //  Xử lí nút next bài hát
            caret_right.onclick = function () {
                if (_this.isRandom) {
                    _this.playRanDomSong();
                }
                else {
                    _this.NextSong();
                }
                audio.play();
                _this.render();
                _this.SongAcitve();
                _this.TimeResert();
            }

            //  Xử lí nút pre bài hát
            caret_left.onclick = function () {
                if(_this.isRanDom) {
                    _this.playRanDomSong();
                } else {
                    _this.PreveSong();
                }
                audio.play();
                _this.render();
                _this.SongAcitve();
                _this.TimeResert();
            }

            //  random 
            RanDom.onclick = function () {
                _this.isRanDom = !_this.isRanDom;
                RanDom.classList.toggle('active',_this.isRanDom)
            }   

            // kết thúc bài hát
            audio.onended = function () {
                if (_this.isRedo) {
                    audio.play()
                } else{
                    caret_right.onclick();
                }
                _this.TimeResert();
            }

            // Quay lại bài hát
            redo.onclick = function () {
                _this.isRedo = !_this.isRedo
                redo.classList.toggle('active',_this.isRedo);
            }
            drag.onchange = function () {
                const Step = (audio.duration/100*drag.value);
                const Update = parseInt(Step);

                const UpdateMinute = Math.floor(Update/60);
                const UpdateSeconds = Math.floor(Update%60);

                progressBar.style.left = Step+"%";

                update_Minute.innerHTML = UpdateMinute < 10?`0${UpdateMinute}`:UpdateMinute;
                update_Seconds.innerHTML = UpdateSeconds < 10?`0${UpdateSeconds}`:UpdateSeconds;

                secondsTime = UpdateSeconds;
                
                Minute = UpdateMinute;
                audio.currentTime = Step;
            }

            // tăng giảm âm thanh
            InputRange.oninput = function(e) {
                let Value =parseInt(e.target.value);
                prosessMute.style.width =  Value + "%";
                if(Value == 0) {
                    Mute.classList.contains("Mutes")?Mute.classList.remove("Mutes"):"";
                    Mute.classList.add("Big_sound" , "Fades");
                    audio.volume = 0.0;
                } 
                else if (Value > 0 && Value <=50) {
                    Mute.classList.contains("Fades")?Mute.classList.remove("Fades"):"";
                    Mute.classList.add("Big_sound" , "Mutes");
                    switch(Value) {
                        case 10: {
                            audio.volume = 0.1;
                        }
                        case 20: {
                            audio.volume = 0.2;
                        }
                        case 30: {
                            audio.volume = 0.3;
                        }
                        case 40: {
                            audio.volume = 0.4;
                        }
                        case 50: {
                            audio.volume = 0.5;
                        }
                    }
                } 
                else {
                    Mute.classList.contains("Big_sound")?Mute.classList.remove("Big_sound"):"";
                    Mute.classList.add("Fades" , "Mutes");
                    switch(Value) {
                        case 60: {
                            audio.volume = 0.6;
                        }
                        case 70: {
                            audio.volume = 0.7;
                        }
                        case 80: {
                            audio.volume = 0.8;
                        }
                        case 90: {
                            audio.volume = 0.9;
                        }
                        case 100: {
                            audio.volume = 1;
                        }
                    }
                }
            } 

            // Xử lí chạy


        },

        LoadFirstSong: function () {
            const Time = this.currentSong;
            heding.innerHTML = this.currentSong.name;
            poster__cd.style.backgroundImage = `url('${this.currentSong.image}')`;
            audio.src = this.currentSong.path;
            time__total.innerHTML = `/ ${Time.minute<10?'0'+Time.minute:Time.minute} : ${Time.seconds<10?'0'+Time.seconds:Time.seconds}`
            
        },
        
        NextSong: function () {
            this.curent_Index++;
            if(this.curent_Index >= this.songs.length) {
                this.curent_Index = 0;
            } 
            this.LoadFirstSong();
        },

        PreveSong: function () {
            this.curent_Index --;
            if(this.curent_Index < 0) {
                this.curent_Index = this.songs.length - 1;
            }
            this.LoadFirstSong();
        },

        playRanDomSong: function () {
            let  NewIndex;
            do {
                    NewIndex = Math.floor(Math.random() * this.songs.length);
            }while(NewIndex=== this.curent_Index)
            this.curent_Index =  NewIndex;
            this.LoadFirstSong();
         },

        TimeResert: function () {
            update_Minute.innerHTML = `00`;
            update_Seconds.innerHTML = `00`;
         },

        SongAcitve: function () {
            setTimeout ( () => {
                $('.song.avtice').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            },250)
        },

        start: function () {
            
            // dịnh nghĩa các song
            this.defineproperty();

            // load bài hát đầu tiên
            this.LoadFirstSong();
                
            // load danh sách bài hát
            this.render();

            // lắng nghe sự kiên
            this.handerEvent();
        }

    }

    Music.start();
// }