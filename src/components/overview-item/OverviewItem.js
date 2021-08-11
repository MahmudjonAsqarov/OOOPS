import React from 'react';
import './OverviewItem.css';
import { AiOutlinePushpin, AiOutlineDrag, AiOutlineMore } from 'react-icons/ai'

const OverviewItem = ({id,image, techName, errorType, errorFrequency, errorStatus}) => {
    return (
        <div key={id} className="overviewItem">
            <div className="overviewItem__top">
                <div className="overviewItem__image">
                    <img src={image} alt="" />
                </div>
                <div className="overviewItem__options">
                    <div className="overviewItem__back">
                        <AiOutlinePushpin/>
                    </div>
                    <div className="overviewItem__back">
                        <AiOutlineDrag/>
                    </div>
                    <div className="overviewItem__back">
                        <AiOutlineMore/>
                    </div>
                </div>
            </div>
            <div className="overviewItem__main">
                <p className="overviewItem__name">{techName}</p>
                <p className="overviewItem__description">{errorType}</p>
                <div className="overviewItem__active">
                    <p className="active__item">Bug Status: </p> <p className="bug__count">{errorFrequency}</p>
                </div>
                <button className="overviewItem__more">More</button>
            </div>
        </div>
    )
}

export default OverviewItem
