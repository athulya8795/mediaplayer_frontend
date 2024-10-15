import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addVideoToCategoryApi, getVideoApi } from '../services/allApi'

function Allvideos({ addVideoStatus ,setVideoStatus }) {

    const [Allvideos, setAllVideo] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState({})

    // side effect
    const getAllVideo = async () => {
        const result = await getVideoApi()
        // console.log(result);
        setAllVideo(result.data)
    }
    console.log(Allvideos);
    // to handle side effect

    const ondrop =(e)=>{
        e.preventDefault()
    }  
    const VideoDrop =async(e)=>{
        const {category,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
        console.log(category,video);

        const newArray = category.allvideos.filter((item)=>item.id!=video.id)
        const newCategory={
            category:category.category,
            allvideos:newArray,
            id:category.id
        }
        const result = await addVideoToCategoryApi(category.id , newCategory)
        console.log(result);
        if(result.status>=200 && result.status<300){
            setVideoStatus(result.data)
        }
    }

    useEffect(() => {
        getAllVideo()
    }, [addVideoStatus, deleteVideoStatus])  /* []-useEffect is called when the component render to the browser */

    return (
        <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
            <h4>Allvideos</h4>
            {/* added video */}
            {Allvideos.length > 0 ?
                <div className="container">
                    <div className="row">
                        {Allvideos.map((item) => (
                            <div className="col-md-3 p-3">
                                <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus} />
                            </div>
                        ))
                        }
                    </div>
                </div>
                :
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'></div>
                        <div className='col-md-4'>
                            <img src="https://jrdsolar.com/templates/default-new/images/empty-cart.png" alt="no image" className='w-100' />
                            <h5 className='text-warning text-center'>No Video Add Yet....</h5>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Allvideos
// 1: