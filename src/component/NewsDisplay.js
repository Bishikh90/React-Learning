import React from 'react';

const NewsDisplay = (props) =>{
    const renderList = props.dataList.map((data) =>{
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })
    return(
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )

}
export default NewsDisplay