class AvatarAnimate {
    constructor(obj) {
        this.config = {
            el: '#app', // 根元素
            max: 5,
            index: 0,  // 当前索引
            imgArr: [], // 图文资源
            spaceBetween: 7,
            isReverse: false, // 图像是否倒序
            delay: 1500,  // 时间建议保持一致
            autoPlay: 1500, // 时间建议保持一致
            direction: 'right',
            animateArr: [],
            resetTime: 30,
            isBg: false, // 是否背景展示
            graphicTime: 34
        }
        Object.assign(this.config, obj)
        this.config.spaceBetween = 7;
        if (this.config.isReverse === false) {
            this.config.imgArr.reverse()
        }
        console.log(!this.$(this.config.el));
        if (!this.$(this.config.el)) {
            console.log(this.config.el, '根元素绑定错误，请查看配置')
            return false;
        }
        if (this.config.max <= 1) {
            console.log(this.config, 'max最小值为2')
            return false;
        }
        if (this.config.max > this.config.imgArr.length) {
            console.log(this.config, '配置有误,max值应小于等于imgArr')
            return false;
        }
        this.init();
    }

    init() {
        try {
            this.createDom();
            this.play();
        } catch (e) {
            console.log(e);
        }
        return this;
    }

    $(el) {
        return document.querySelector(el)
    }

    createDom() {
        const app = this.$(this.config.el)
        this.splitArrFn();
        if (this.config.isBg) {
            if (this.config.direction === 'right') {
                app.style.cssText = `display: flex;
                    flex-direction: row-reverse;
                    place-content: flex-start;
                    flex-shrink: 0;`
                let tempAnimateDom = ``
                for (let i = 0; i < this.config.animateArr.length; i++) {
                    if (i === this.config.max - 1) {
                        tempAnimateDom += ` <div class="animate"
 style="background: url(${this.config.animateArr[i].src}) no-repeat center;width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};transform: translateX(0) scale(0);opacity: 0;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
            </div>`;
                    } else {
                        tempAnimateDom += ` <div class="animate"
 style="background: url(${this.config.animateArr[i].src}) no-repeat center;width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};opacity: 1;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
            </div>`;
                    }
                }
                this.$(this.config.el).innerHTML = tempAnimateDom
            } else {
                app.style.cssText = `display: flex;
                    flex-direction: row-reverse;
                    place-content: flex-end;
                     transform: translateX(14px);
                    flex-shrink: 0;`
                let tempAnimateDom = ``
                for (let i = 0; i < this.config.animateArr.length; i++) {
                    if (i === 0) {
                        tempAnimateDom += ` <div class="animate"
 style="background: url(${this.config.animateArr[i].src}) no-repeat center;width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};transform: translateX(0) scale(0);opacity: 0;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
            </div>`;
                    } else {
                        tempAnimateDom += ` <div class="animate"
 style="background: url(${this.config.animateArr[i].src}) no-repeat center;width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};opacity: 1;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
            </div>`;
                    }
                }
                this.$(this.config.el).innerHTML = tempAnimateDom
            }
        } else {
            if (this.config.direction === 'right') {
                app.style.cssText = `display: flex;
                    flex-direction: row-reverse;
                    place-content: flex-start;
                    flex-shrink: 0;`
                let tempAnimateDom = ``
                for (let i = 0; i < this.config.animateArr.length; i++) {
                    if (i === this.config.max - 1) {
                        tempAnimateDom += ` <div class="animate"
 style="width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};transform: translateX(0) scale(0);opacity: 0;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
                <img style="width: 100%;height: 100%;border-radius: 100%;" src="${this.config.animateArr[i].src}" alt="">
            </div>`;
                    } else {
                        tempAnimateDom += ` <div class="animate"
 style="width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};opacity: 1;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
                <img style="width: 100%;height: 100%;border-radius: 100%;" src="${this.config.animateArr[i].src}" alt="">
            </div>`;
                    }
                }
                this.$(this.config.el).innerHTML = tempAnimateDom
            } else {
                app.style.cssText = `display: flex;
                    flex-direction: row-reverse;
                    place-content: flex-end;
                     transform: translateX(14px);
                    flex-shrink: 0;`
                let tempAnimateDom = ``
                for (let i = 0; i < this.config.animateArr.length; i++) {
                    if (i === 0) {
                        tempAnimateDom += ` <div class="animate"
 style="width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};transform: translateX(0) scale(0);opacity: 0;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
                <img style="width: 100%;height: 100%;border-radius: 100%;" src="${this.config.animateArr[i].src}" alt="">
            </div>`;
                    } else {
                        tempAnimateDom += ` <div class="animate"
 style="width: 20px;height: 20px;border-radius: 100%;overflow: hidden;margin-left: ${-this.config.spaceBetween}px;z-index: ${this.config.max - i};opacity: 1;transition: transform ${this.config.delay}ms linear 0ms, opacity ${this.config.delay}ms linear 0ms">
                <img style="width: 100%;height: 100%;border-radius: 100%;" src="${this.config.animateArr[i].src}" alt="">
            </div>`;
                    }
                }
                this.$(this.config.el).innerHTML = tempAnimateDom
            }
        }

        let $$ = (className) => {
            return document.querySelectorAll(className)
        }

        if (this.config.direction === 'right') {
            setTimeout(() => {
                $$(`${this.config.el} .animate`)[0].style.transform = `translateX(${Math.abs(this.config.spaceBetween * 2)}px) scale(0)`;
                $$(`${this.config.el} .animate`)[0].style.opacity = 0;
            }, this.config.resetTime)

            setTimeout(() => {
                $$(`${this.config.el} .animate`)[0].style.transform = `translateX(${Math.abs(this.config.spaceBetween * 2)}px) scale(0)`;
                $$(`${this.config.el} .animate`)[0].style.opacity = 0;
                for (let k = 1; k < this.config.max - 1; k++) {
                    $$(`${this.config.el} .animate`)[k].style.transform = `translateX(${Math.abs(this.config.spaceBetween * 2)}px) scale(1)`;
                }
                $$(`${this.config.el} .animate`)[this.config.max - 1].style.transform = `translateX(${Math.abs(this.config.spaceBetween * 2)}px) scale(1)`;
                $$(`${this.config.el} .animate`)[this.config.max - 1].style.opacity = 1;
            }, this.config.graphicTime)
        } else {
            setTimeout(() => {
                    $$(`${this.config.el} .animate`)[this.config.max - 1].style.transform = `translateX(-${Math.abs(this.config.spaceBetween * 2)}px) scale(0)`;
                    $$(`${this.config.el} .animate`)[this.config.max - 1].style.opacity = 0;
                },
                this.config.resetTime)

            setTimeout(() => {
                    $$(`${this.config.el} .animate`)[this.config.max - 1].style.transform = `translateX(-${Math.abs(this.config.spaceBetween * 2)}px) scale(0)`;
                    $$(`${this.config.el} .animate`)[this.config.max - 1].style.opacity = 0;
                    for (let k = 1; k < this.config.max - 1; k++) {
                        $$(`${this.config.el} .animate`)[k].style.transform = `translateX(-${Math.abs(this.config.spaceBetween * 2)}px) scale(1)`;
                    }
                    $$(`${this.config.el} .animate`)[0].style.transform = `translateX(-${Math.abs(this.config.spaceBetween * 2)}px) scale(1)`;
                    $$(`${this.config.el} .animate`)[0].style.opacity = 1;
                },
                this.config.graphicTime)
        }
    }

    splitArrFn() {
        this.config.index = this.config.index === this.config.max ? 0 : ++this.config.index;
        if (this.config.direction === 'right') {
            let newArr = this.config.imgArr.slice(-this.config.max)
            this.config.imgArr.unshift(this.config.imgArr.pop())
            this.config.animateArr = newArr.reverse()
        } else {
            let newArr = this.config.imgArr.slice(0, this.config.max)
            console.log(newArr)
            this.config.imgArr.push(this.config.imgArr.shift())
            this.config.animateArr = newArr.reverse()
        }
    }

    play() {
        setTimeout(() => {
            this.createDom();
            this.play();
            if (typeof this.config.callback === 'function') {
                this.config.callback(this.config)
            }
        }, this.config.delay)
    }
}
