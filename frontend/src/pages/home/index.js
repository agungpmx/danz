import React, { useEffect, useState, useRef, useCallback } from "react";
import "./index.scss"
import { useSelector, useDispatch } from "react-redux"
import { Gap, DataNotFound} from "../../components";
import { getDateXDaysAgo } from "../../utils"
import { setPagenation, getDatas, setDetailId } from "../../actions"
import { useHistory } from "react-router-dom"


export default function Home(params) {
    const history = useHistory()
    const dispatch = useDispatch()
    const { loading, hasMore,  error} = useSelector(state => state?.reducers)
    const { data, pagenation, location, desc, positions, jobsList} = useSelector(state => state?.home)
    const observer = useRef();

    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting && hasMore && !desc && !location) {
                dispatch(setPagenation(pagenation + 1))
                dispatch(getDatas(pagenation + 1, data))
          }
        })
        if (node) observer.current.observe(node)
      }, [loading, hasMore])

    const onClick = (items) => {
        history.push(`/detail/${items.id}`)
    }

    return (
        <>
            {
                data?.length !== 0 && 
                <label className="label">{jobsList}</label>
            }
            {
                 data?.length !== 0 ? data?.map((items, index) => {
                    return (
                        <div onClick={() => onClick(items)} key={index}>
                          {
                              items?.title && data?.length == index + 1 ? 
                          <div 
                              ref={lastBookElementRef} 
                              className="list">
                              <div style={{ flex: 3}}>
                                  <label style={{ cursor: 'pointer' }} className="label_list">{items?.title}</label>
                                  <Gap height={5}/>
                                  <div>
                                      <span className="company">{items?.company} - </span>
                                      <span className="type">{items?.type}</span>
                                  </div>
                              </div>
                              <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                                  <div className="location">{items?.location}</div>
                                  <Gap height={5}/>
                                  <div className="date">{getDateXDaysAgo(new Date(items?.created_at))}</div>
                              </div>
                          </div>
                          :  items?.title && 
                          <div 
                              className="list">
                              <div style={{ flex: 3}}>
                                  <label style={{ cursor: 'pointer' }} className="label_list">{items?.title}</label>
                                  <Gap height={5}/>
                                  <div>
                                      <span className="company">{items?.company} - </span>
                                      <span className="type">{items?.type}</span>
                                  </div>
                              </div>
                              <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                                  <div className="location">{items?.location}</div>
                                  <Gap height={5}/>
                                  <div className="date">{getDateXDaysAgo(new Date(items?.created_at))}</div>
                              </div>
                          </div>
                          }
                        </div>
                    )
            }) : <DataNotFound />
            }
        </>
    )
}