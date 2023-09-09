import "./Contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn, MdWork } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { SiFiverr, SiFreelancer } from "react-icons/si";
import { BiLogoUpwork } from "react-icons/bi";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = ({name, email, message}) => {
    const templateParams = {
        from_name: email,
        to_name: "Abubakar",
        message,
        reply_to: email,
        }

    /* 
    emailjs.send("service_iarwqio","template_brhcv54",{
from_name: "123",
to_name: "asd",
message: "zxc",
reply_to: "qwe",
});
    */

    emailjs
      .send("service_iarwqio", "template_brhcv54", templateParams, "TZpRx-J6FGuXMUput")
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    form.resetFields();
    // console.log(values);
  };
  return (
    <div className="px-5 pb-5">
      <h1 className="resumeHeaderName py-4">Let's Discuss</h1>
      <Row xs={1} md={2} className="g-4 d-flex align-items-center">
        <Col xs={12} md={6}>
          <div className="contactsection p-4">
            <img src="/Images/contactHand.avif" alt="" className="img-fluid rounded" />
            <h3 className="pt-3">Abubakar Siddik</h3>
            <small className="fs-6">
              {" "}
              <MdWork /> Web Developer
            </small>
            <p className="fs-5 mt-3">
              I am available for freelance work. Connect with me via and call in to my account.
            </p>
            <div>
              <Link
                to="https://www.google.com/maps/place/Dhaka/@23.8634965,90.2427756,11.75z/data=!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181!16zL20vMGZuYjQ?entry=ttu"
                target="_blank"
              >
                <p className="mb-0 ">
                  <MdOutlineLocationOn /> Dhaka, Bangladesh
                </p>
              </Link>
            </div>
            <div className="d-flex  flex-column">
              <Link to="tel:+8801580743409" target="_blank" className="">
                {" "}
                <AiOutlinePhone /> +8801580743409
              </Link>
              <Link to="tel:+8801750891998" target="_blank" className="">
                {" "}
                <AiOutlinePhone /> +8801750891998
              </Link>
            </div>
            <div>
              <Link to="mailto:abubakarsiddikl.info@gmail.com" target="_blank" className="">
                {" "}
                <AiOutlineMail /> abubakarsiddikl.info@gmail.com
              </Link>
            </div>
            <hr className="w-100 bg-dark my-3" />
            <h6 className="ms-3 pb-2">Find Me In Marketplace</h6>
            <div className=" d-flex contactIcons my-4">
              <Link
                to="https://www.facebook.com/abubakar.siddik.79219754"
                target="_blank"
                className="contactIcon"
              >
                {" "}
                <SiFiverr />
              </Link>
              <Link
                to="mailto:abubakarsiddikl.info@gmail.com"
                target="_blank"
                className="contactIcon"
              >
                <BiLogoUpwork />
              </Link>
              <Link to="https://github.com/abubakarva33" target="_blank" className="contactIcon">
                <SiFreelancer />
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          {/* <form action="" className="d-flex flex-column">
            <input type="text" name="" id="" className="inputBox" placeholder="Your Name" />
            <input type="text" name="" id="" className="inputBox" placeholder="Your Email" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="inputBox"
            ></textarea>
            <Link
              to="/"
              className="mainBtn w-50 border-0 text-decoration-none align-self-center mt-4"
            >
              <span className="mainBtnSpan ">Send Message</span>
            </Link>
          </form> */}
          <Form
            name="complex-form"
            form={form}
            className="d-flex flex-column"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Your Name is required",
                },
              ]}
            >
              <Input placeholder="Your Name" className="inputBox" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Your Email is required",
                },
              ]}
            >
              <Input placeholder="Your Email" className="inputBox" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Your Message is required",
                },
              ]}
            >
              <TextArea
                placeholder="Your Message"
                className="inputBox"
                autoSize={{
                  minRows: 8,
                  maxRows: 15,
                }}
              />
            </Form.Item>
            <Form.Item className="mainBtn w-50 border-0 text-decoration-none align-self-center mt-4">
              <Button type="primary" htmlType="submit" className="w-50 h-auto">
                <span className="mainBtnSpan">Send Message</span>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
