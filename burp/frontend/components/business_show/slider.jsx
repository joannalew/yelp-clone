import React from 'react';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentIndex: 0 };
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
        this.prevPhoto = this.prevPhoto.bind(this);
    }

    selectBox(index) {
        const boxes = document.getElementsByClassName('showcase-photo-box');
        for (let i = 0; i < boxes.length; i++){
            boxes[i].classList.remove('showcase-photo-select');
        }

        const element = document.getElementsByClassName(`showcase-photo-${index}`)[0];
        element.classList.add('showcase-photo-select');
    }

    unselectBox(index) {
        const element = document.getElementsByClassName(`showcase-photo-${index}`)[0];
        element.classList.remove('showcase-photo-select');

        const boxes = document.getElementsByClassName('showcase-photo-box');
        const selected = false;
        for (let i = 0; i < boxes.length; i++){
            if (element.classList.contains('showcase-photo-select'))
                selected = true;
        }

        if (!selected) {
            const middle = document.getElementsByClassName(`showcase-photo-2`)[0];
            middle.classList.add('showcase-photo-select');
        }
    }

    mouseLeave(index) {
        return () => this.unselectBox(index);
    }

    mouseEnter(index) {
        return () => this.selectBox(index);
    }

    nextPhoto() {
        if (this.state.currentIndex < this.props.business.picLinks.length - 3) {
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
    }

    prevPhoto() {
        if (this.state.currentIndex > 0) {
            this.setState({ currentIndex: this.state.currentIndex - 1})
        }
    }

    render() {
        if (!this.props.business.picLinks) { return (<div></div>); }

        return(
            <div className="slider">
                <div className="showcase-photo-boxes">
                    <div className="showcase-photo-box showcase-photo-1" onMouseEnter={ this.mouseEnter(1) } onMouseLeave={ this.mouseLeave(1)} >
                        <img src={this.props.business.picLinks[this.state.currentIndex]}></img>
                    </div>
                    <div className="showcase-photo-box showcase-photo-2 showcase-photo-select" onMouseEnter={ this.mouseEnter(2) } onMouseLeave={ this.mouseLeave(2)} >
                        <img src={this.props.business.picLinks[this.state.currentIndex + 1]}></img>
                    </div>
                    <div className="showcase-photo-box showcase-photo-3" onMouseEnter={ this.mouseEnter(3) } onMouseLeave={ this.mouseLeave(3) }>
                        <img src={this.props.business.picLinks[this.state.currentIndex + 2]}></img>
                    </div>
                </div>

                <div className="slider-left-arrow" onClick={ this.prevPhoto }>
                    <i className="material-icons">chevron_left</i>
                </div>

                <div className="slider-right-arrow" onClick={ this.nextPhoto }>
                    <i className="material-icons">chevron_right</i>
                </div>
            </div>
        )
    }
}

export default Slider;