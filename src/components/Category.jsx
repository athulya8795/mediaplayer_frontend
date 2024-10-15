import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Videocard from './Videocard';
import { addCategoryApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category({ videoStatus }) {
  const [show, setShow] = useState(false);
  const [videoCategory, setVideoCategory] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState({})
  const [deleteCategoryStatus, setdeleteCategoryStatus] = useState({})
  const [videoCategoryStatus, setVideoCategoryStatus] = useState({})
  console.log(videoCategory);

  const handleCancel = () => {
    setVideoCategory("")
  }

  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (videoCategory) {
      const reqBody = {
        category: videoCategory,
        allvideos: []
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('category add sucessfully')
        handleClose()
        setAddCategoryStatus(result.data)
      }
      else {
        toast.error('something went wrong')
        handleClose()
      }
    }
    else {
      toast.info('Please add a Category name')
    }
  }

  const getCategory = async () => {
    const result = await getAllCategoryApi()
    setAllCategory(result.data);
  }
  console.log(allCategory);

  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdeleteCategoryStatus(result.data)
    }
  }

  const ondrag = (e) => {
    e.preventDefault()   // it prevent the data lose
  }

  const VideoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);

    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);

    if (categoryDetails.allvideos.find((item) => item.id == videoDetails.id)) {
      toast.error('Video already present in the category')
    }
    else {
      categoryDetails.allvideos.push(videoDetails)
      console.log(categoryDetails);

      const result = await addVideoToCategoryApi(categoryDetails.id, categoryDetails)
      if (result.status >= 200 && result.status < 300) {
        toast.success('video added')
        setVideoCategoryStatus(result.data)
      }
      else {
        toast.error('something went wrong')
      }
    }
  }

  const videodrag = (e, video, category) => {
    console.log(video);
    console.log(category);

    const dataShare = {
      category,
      video
    }
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))
  }

  useEffect(() => {
    getCategory()
  }, [addCategoryStatus, deleteCategoryStatus, videoCategoryStatus, videoStatus])
  return (
    <>
      <h5>Category</h5>
      <button className='btn btn-warning w-100' onClick={handleShow}>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border-2 rounded'>
            <input type="text" value={videoCategory} placeholder='Category name' className='form-control' onChange={(e) => setVideoCategory(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      {allCategory?.length > 0 &&
        allCategory.map((item) => (
          <div className='border border-secondary border-2 p-3 rounded mt-4' droppable onDragOver={(e) => ondrag(e)} onDrop={(e) => VideoDrop(e, item)}>
            <div className='d-flex justify-content-between mb-3'>
              <h5>{item?.category}</h5>
              <button className='btn btn-danger' onClick={() => handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            {item?.allvideos?.length > 0 &&
              item?.allvideos?.map((video) => (
                <div draggable onDragStart={(e) => videodrag(e, video, item)}>
                  <Videocard video={video} isPresent={true} />
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}
export default Category

// 43:48