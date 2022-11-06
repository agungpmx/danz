import React, { useEffect } from "react";
import { setDetailId } from "../../actions"
import { useDispatch, useSelector } from "react-redux"
import "./index.scss"
import { Gap } from "../../components";
import HtmlToReact from "html-to-react"

export default function Detail({match}) {
    const { Parser } = HtmlToReact
    const htmlToReactParser = new Parser();
    const dispatch = useDispatch()
    const { dataDetail, id } = useSelector(state => state?.detail)
    const props = match.params

    useEffect(() => {
        if (!id) {
            dispatch(setDetailId(props.id))
        }
    }, [])
     
    return (
        <>
          <div>
              <div className="location">{dataDetail?.type} / {dataDetail?.location}</div>
              <Gap height={5}/>
              <label className="label">{dataDetail?.title}</label>
          </div>
          <Gap height={30}/>
          <div className="container_detail">
              <div className="grid1">
                  {htmlToReactParser.parse(dataDetail?.description)}
              </div>
              <div className="grid2">
                  <Gap height={20}/>
                  <div className="company">
                      <div className="name_company">
                          <label>{dataDetail?.company}</label>
                      </div>
                      <div className="logo_company">
                          <img 
                              src={dataDetail?.company_logo} 
                              style={{ width: '100%', height: 220}}/>
                              <Gap height={4}/>
                          <a href={dataDetail?.company_url}>
                              {dataDetail?.company_url}
                          </a> 
                      </div>
                  </div>
                  <Gap height={20}/>
                  <div className="jobs">
                      <div className="name_label">
                          <label>How to apply</label>
                      </div>
                      <div className="detail_apply">
                          {htmlToReactParser.parse(dataDetail?.how_to_apply)}
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}