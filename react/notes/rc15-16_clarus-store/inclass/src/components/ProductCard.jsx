import React from 'react'
import {useNavigate} from "react-router-dom";

const ProductCard = ({item}) => {
  const {title, category, thumbnail, price} = item;
  const navigate = useNavigate()
  return (
    <div className="cursor-pointer" onClick={() => navigate(`/dashboard/products/${title}?detail=${item.id}`,{state:item})}>
      <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
        <img
          src={thumbnail}
          alt={title}
          title={title}
          className="h-[200px] w-full object-fit lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex-1">
          <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} $</p>
      </div>
    </div>
  )
}

export default ProductCard;

// Detail sayfasina veri tasima yollari

//! 1.yol useNavigate ile tasiyip useLocation ile karsilama(bizim yaptigimiz gibi)
//? 2.yol bilgileri globale aktarip detail sayfasinda globalden cekme.Ornegin; detail diye bir state acip onu burada tiklama gerceklestiginde doldurup detail sayfasindan cekip alma
//& 3.yol ve guvenli yol yonlendirme yaparken id bilgisini veya urune ait veri cekebilecegimiz bir degeri (slug gibi) url e ekleyip ilgili sayfada gelen useParams ile ilgili id bilgisini yakalayip apiye istek atma