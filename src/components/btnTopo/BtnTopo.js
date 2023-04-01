import React, {useState} from 'react';
import './btntopo.css'

export default function BtnTopo(props){
    const [btnShow, setBtnShow] = useState(false)

    const btnTopo = (e) => {
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', (e) =>{
        let scrollTop = e.target.scrollingElement.scrollTop
        if(scrollTop >= 2300){
            setBtnShow('btnTopoShow')
        } else {
            setBtnShow('btnTopo')
        }
    })

    return (
        <button id='btnTopo' 
            className={btnShow === 'btnTopo' ? 'btnTopo' : 'btnTopo btnTopoShow'}
            onClick={btnTopo}
            >
        <svg className="btnTopo" width="36" height="23" viewBox="0 0 36 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 23L18 0L0 23L18 16L36 23Z" fill="black"/>
        </svg>
        </button>

    )


}