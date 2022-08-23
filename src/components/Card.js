import React from 'react'
import bg2 from './img/bg2.jpg'

function Card({book}) {
  console.log(book)
  return (
    <>

      {
        book.map((item)=>{
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount =item.saleInfo.listPrice && item.saleInfo.listPrice.amount

          let title=item.volumeInfo && item.volumeInfo.title

          let currancy=item.saleInfo.listPrice && item.saleInfo.listPrice.currencyCode;

          if(thumbnail!=undefined && amount!=undefined &&title!=undefined &&currancy!=undefined){

            return(
              <>
              <div className='card'>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <p className="amount">{currancy} {amount}</p>
              </div>
          </div>
          </>
            )
          }
          
        })

      }

    
    </>
  )
}

export default Card