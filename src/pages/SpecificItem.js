import React, { useEffect, useState } from "react";
import ItemIntroduce from "../components/ItemIntroduce";
import "../style/item.css";
import { getProduct } from "../api/api";
import { useParams } from "react-router-dom";

const SpecificItem = () => {
  const { id } = useParams();
  const comment = "comments";
  const [specificItem, setSpecificItem] = useState({});
  const [inquiryList, setInquiryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSpecificProduct = async () => {
    try {
      setIsLoading(true);
      const productInfo = await getProduct(id);
      const productComment = await getProduct(`${id}/${comment}`);
      setInquiryList(productComment);
      setSpecificItem(productInfo);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getSpecificProduct();
  }, [id]);
  return (
    <div className="itemContainer">
      <ItemIntroduce specificItem={specificItem} />
    </div>
  );
};

export default SpecificItem;

