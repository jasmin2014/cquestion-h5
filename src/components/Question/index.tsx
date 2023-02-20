import React, { useState } from "react";
import { Button, Popup } from 'antd-mobile';
export interface IEwtQuestionProps {value?:any;}
export const EwtQuestion:React.FC<IEwtQuestionProps> = (props) => {
    const [visible1, setVisible1] = useState(false);
    return <div>
        <Button onClick={() => { setVisible1(true) }} >打开弹框</Button>
        <Popup
            visible={visible1}
            onMaskClick={() => {
                setVisible1(false)
            }}
            bodyStyle={{ height: '33vh' }}
        >
            <div className="ewtm-pm-popoptions">
                <div className="qo__option"><div className="qo__tag"><p>A</p></div><div className="qo__content"><span>Taking a trip does great good to seniors. </span></div></div>
                <div className="qo__option checked"><div className="qo__tag"><p>B</p></div><div className="qo__content"><span>It is a pleasant experience to travel with seniors. </span></div></div>
                <div className="qo__option success"><div className="qo__tag"><p>C</p></div><div className="qo__content"><span>To have a long journey with seniors is unpractical. </span></div></div>
                <div className="qo__option fault"><div className="qo__tag"><p>D</p></div><div className="qo__content"><span>Careful planning ensures seniors to take a nice trip. </span></div></div>
                <div className="qo__option"><div className="qo__tag"><p>E</p></div><div className="qo__content"><span>Taking a trip does great good to seniors. </span></div></div>
                <div className="qo__option"><div className="qo__tag"><p>F</p></div><div className="qo__content"><span>Taking a trip does great good to seniors. </span></div></div>
                <div className="qo__option"><div className="qo__tag"><p>G</p></div><div className="qo__content"><span>Taking a trip does great good to seniors. </span></div></div>
            </div>
        </Popup>
    </div>
};
export default EwtQuestion;