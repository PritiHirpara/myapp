import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export function PostApi() {
  const [imagePreview, setImagePreview] = useState(null);

  const ename = useRef();
  const salary = useRef();
  const dept = useRef();
  const gender = useRef();

  // const [formInput, setFormInput] = useState({
  //     "product_name": "",
  //     "product_price": 0.0,
  //     "product_description": ""
  // });

  // const handleInput = (e) => {
  //     const { name, value } = e.target;
  //     setFormInput(prevState => ({
  //         ...prevState,
  //         [name]: value
  //     }))
  // };


  const [formData, setformData] = useState({
    "ename": "",
    "salary": "",
    "department": "",
    "gender": ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function adddataclick() {
    // var empname = ename.current.value;
    // var esalary = salary.current.value;
    // var edept = dept.current.value;
    // var egender = gender.current.value;

    // const formData = new FormData();
    // formData.append("ename", empname);
    // formData.append("salary", esalary);
    // formData.append("department", edept);
    // formData.append("gender", egender);

    // var params = {
    //     "ename":empname,
    //     "salary":esalary,
    //     "department":edept,
    //     "gender":egender,
    // }
    const fd = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value);
    });
    console.log(fd);

    axios.post("https://studiogo.tech/student/studentapi/insertEmployeeNormal.php", fd).then((responce) => {

      if (responce.status == 200) {
        const json = responce.data;
        if (json.status == true) {
          var message = json.message;
          alert(message);
        }
        else {
          var message = json.message;
          alert(message);
          console.log(message)
        }
        // console.log(json);
        // setData(json);
      }
    }).catch((error) => {
      console.log("error = " + error);
    })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (<>

    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* ===== Header / Navbar ===== */}

      {/* <Header /> */}

      {/* ===== Body (Sidebar + Content) ===== */}
      <div className="d-flex flex-grow-1">
        {/* ===== Sidebar ===== */}

        {/* <Sidebar /> */}

        {/* ===== Main Content ===== */}
        <div className="flex-grow-1 p-5">
          <div
            className="card shadow-lg p-4 mx-auto"
            style={{ maxWidth: "500px", borderRadius: "15px" }}
          >
            <h3 className="text-center mb-4">Add Category</h3>
            <form>
              {/* Category Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Product Name</label>
                <input
                  ref={ename}
                  type="text"
                  name="ename"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter category name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Product Qty</label>
                <input
                  ref={salary}
                  type="text"
                  name="salary"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter category name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Amount</label>
                <input
                  ref={dept}
                  type="text"
                  name="department"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter category name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Amount</label>
                <input
                  ref={gender}
                  type="text"
                  name="gender"
                  onChange={handleInput}
                  className="form-control"
                  placeholder="Enter category name"
                />
              </div>

              {/* Category Image */}
              {/* <div className="mb-3 text-center">
                <label className="form-label fw-semibold d-block">
                  Category Image
                </label>
                <div
                  className="border border-2 border-secondary rounded-3 p-3 mb-3"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="img-fluid rounded mb-2"
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                  ) : (
                    <p className="text-muted mb-2">No image selected</p>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="form-control"
                  />
                </div>
              </div> */}

              {/* Submit Button */}
              <div className="d-grid">
                <button type="button" onClick={adddataclick} className="btn btn-primary btn-lg">
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>)
}