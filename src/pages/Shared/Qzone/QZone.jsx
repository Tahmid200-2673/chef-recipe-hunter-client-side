import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.jpg'
import qzone3 from '../../../assets/qZone3.jpeg'
const mystyle = {
    width:"250px" , height:"200px"
     
};
const QZone = () => {
    return (
        <div>
            <div className='bg-black text-white text-center my-4 py-4'>
            
            
            <div>
                <h5>Gulsan 2</h5>
                <img src={qzone1} alt="" style={mystyle}/>
                <button type="button" className="btn btn-primary mt-3">View Details</button>
                 <hr />
                <h5>Banani</h5>
                <img src={qzone2} alt="" style={mystyle}/>
                <button type="button" className="btn btn-primary mt-3">View Details</button>
                 <hr />
                <h5>Uttara Sector 4</h5>
                <img src={qzone3} alt="" style={mystyle}/>
                <button type="button" className="btn btn-primary mt-3">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default QZone;
