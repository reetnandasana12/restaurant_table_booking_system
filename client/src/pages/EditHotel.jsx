import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { addHotel, editHotel, getAllHotels } from "./redux/action/hotelActions";

import { useParams } from "react-router-dom";



function EditHotel() {

  const { hotelid } = useParams();
  const { hotels } = useSelector((state) => state.hotelsReducer);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const [hotel, sethotel] = useState();
  const [totalhotels, settotalhotels] = useState([]);
  useEffect(() => {
    if (hotels.length === 0) {
      dispatch(getAllHotels());
    } else {
      settotalhotels(hotels);
    //   sethotel(hotels.find((o) => o._id === match.params.hotelid));
    //   console.log(hotel);
    }
  }, [hotels]);

  function onFinish(values) {
    values._id = hotel._id;

    dispatch(editHotel(values));
    console.log(values);
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {totalhotels.length > 0 && (
            <Form
              initialValues={hotel}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Hotel</h3>

              <hr />
              <Form.Item
                name="name"
                label="Hotel name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="foodType"
                label="Fuel Type"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit Hotel</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout>
  );
}

export default EditHotel;
