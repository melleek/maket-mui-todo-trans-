import React, { useEffect, useState } from 'react'
import "./App.css"
import { useTranslation } from 'react-i18next'
import Typography from 'antd/es/typography/Typography'
import { Button, Col, Row } from 'antd'
import FileBase64 from 'react-file-base64';
import axios from 'axios';

//modal
import { Box, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Card
import Card from './components/Card'
import { Card1 } from './components/Card'

// image
// import img1 from "./components/img/1.png";
import img2 from "./components/img/2.png";
import img3 from "./components/img/3.png";
import img4 from "./components/img/4.png";
import img5 from "./components/img/5.png";
import img6 from "./components/img/6.png";
import img7 from "./components/img/Shape.png";
import img8 from "./components/img/препод.png";

import img9 from "./components/img/1 (1).png";
import img10 from "./components/img/2 (2).png";
import img11 from "./components/img/3 (1).png";
import img12 from "./components/img/4 (1).png";
import img13 from "./components/img/5 (1).png";

import img14 from "./components/img/six.png";
import img15 from "./components/img/7.png";
import img16 from "./components/img/8.png";
import img17 from "./components/img/9.png";
import img18 from "./components/img/10.png";
import img19 from "./components/img/11.png";
import img20 from "./components/img/12.png";
import img21 from "./components/img/13.png";
import img22 from "./components/img/14.png";
import img23 from "./components/img/15.png";
import img24 from "./components/img/16.png";
import img25 from "./components/img/17.png";
import img26 from "./components/img/18.png";
import img27 from "./components/img/19.png";


//Table style
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function App() {

  //Translate 
  const [lng, setImg] = useState("en")
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  const api = "http://localhost:3000/data"

  const [base64F, setBase64F] = useState(null)
  const [base64F1, setBase64F1] = useState(null)

  const handleImg = (file) => {
    setBase64F(file.base64)
  }

  const handleImg1 = (file) => {
    setBase64F1(file.base64)
  }

  //modal 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //modal  add
  const [openAdd, setOpenAdd] = useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };


  const [todo, setTodo] = useState([])
  const [addName, setAddName] = useState("")
  const [addCity, setAddCity] = useState("")
  const [addNumber, setAddNumber] = useState("")

  const [editName, setEditName] = useState("")
  const [editCity, setEditCity] = useState("")
  const [editNumber, setEditNumber] = useState("")
  const [idx, setIdx] = useState(null)


  // function get
  async function get() {
    try {
      let { data } = await axios.get(api)
      setTodo(data)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get()
  }, [])


  // Delete user
  async function deleteUser(id) {
    try {
      let { data } = await axios.delete(`${api}/${id}`)
      get()
    } catch (error) {
      console.log(error);
    }
  }

  // Edit user
  async function editUser(id, user) {
    try {
      let { data } = await axios.put(`${api}/${id}`, user);
      get()
    } catch (error) {
      console.log(error);
    }
  }

  // Add user
  async function addUser(user) {
    try {
      let { data } = await axios.post(api, user)
      get()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {/* header */}
      <header className="bg lg:pt-[51px]  lg:px-[200px] ">
        <nav className="flex justify-between items-center sm:p-[12px]">
          <div className="uppercase lg:flex sm:hidden items-center gap-[50px]">
            <Typography className="text-white nav">{t("t1")}</Typography>
            <Typography className="text-white nav">{t("t2")}</Typography>
            <Typography className="text-white nav">{t("t3")}</Typography>
            <Typography className="text-white nav">{t("t4")}</Typography>
          </div>
          <select
            name=""
            id=""
            className="rounded-[10px] bg-[#73c1d0] p-[5px] text-[18px]"
            value={lng}
            onChange={(e) => {
              changeLanguage(e.target.value);
              setImg(e.target.value);
            }}
          >
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </nav>

        <main className="lg:pt-[148px] flex items-center justify-between sm:flex-wrap  sm:p-[12px]">
          <aside>
            <Typography className="text-white n1 lg:text-[84px] sm:text-[32px]  uppercase">
              {t("t6")}
            </Typography>
            <Typography className="text-white n1 lg:text-[84px] sm:text-[32px]  uppercase">
              {t("t7")}
            </Typography>
          </aside>

          <aside>
            <Typography className="text-white nav lg:w-[370px]">
              {t("t8")}
            </Typography>
          </aside>
        </main>
        <div className="flex items-center sm:px-[10px] py-[40px] justify-between lg:pr-[220px]">
          <Typography className="text-white nav lg:w-[370px]">
            {t("t9")}
          </Typography>
          <Button className="bg-[#FCA82D] rounded-[31px] border-none uppercase pb-[32px] py-[12px] px-[24px]">
            {t("t10")}
          </Button>
        </div>

        <div className="div">
          <div className="lg:py-[38px] lg:px-[53px] sm:flex-wrap sm:px-[24px] sm:py-[12px] gap-[50px] text-[#fff] flex justify-around">
            <ul className="flex flex-col items-start gap-[10px]">
              <li>{t("t11")}</li>
              <li>{t("t12")}</li>
            </ul>

            <ul className="text-end flex flex-col items-start gap-[10px]">
              <li>{t("t13")}</li>
              <li>{t("t14")}</li>
            </ul>

            <ul className="flex flex-col items-start gap-[10px]">
              <li>{t("t15")}</li>
              <li>{t("t16")}</li>
            </ul>

            <ul className="flex flex-col items-start gap-[10px]">
              <li>{t("t17")}</li>
              <li>{t("t18")}</li>
            </ul>

            <ul>
              <li>{t("t19")}</li>
              <li>{t("t20")}</li>
            </ul>
            <img
              src="src/assets/header/down.png"
              className="lg:block md:block sm:hidden"
            />
          </div>
        </div>
      </header>

      <main>
        {/* section 1 */}
        <section className="bg-[#010F29]">
          <div className=" lg:px-[200px]">
            <div className="d2 lg:px-[51px] lg:pt-[208px] sm:pt-[80px] sm:pb-[20px] sm:px-[10px]">
              <div className="flex justify-between items-center sm:flex-wrap sm:gap-[20px]">
                <Typography className="text-white nav sm:text-[32px] lg:text-[84px]">
                  {t("t19")}
                </Typography>
                <img
                  src="src/assets/main/Group 3.png"
                  className="lg:w-[6%] sm:w-[15%]"
                />
              </div>
            </div>
            <main className="lg:py-[60px] flex items-start justify-between sm:flex-wrap sm:gap-[50px] sm:px-[18px] sm:py-[24px]">
              <aside className="flex flex-col items-start gap-[50px]">
                <Typography className=" text-white nav text-[21px] lg:w-[481px]">
                  <span className="font-[800]">{t("t20")}</span> {t("t21")}
                </Typography>
                <Typography className=" text-white nav text-[21px] lg:w-[481px]">
                  <span className="font-[800]">{t("t22")}</span> {t("t23")}
                </Typography>
              </aside>
              <aside>
                <Typography className=" text-white nav text-[21px] lg:w-[481px]">
                  <span className="font-[800]">{t("t24")}</span> {t("t25")}
                </Typography>
              </aside>
            </main>
          </div>
          <div className="flex items-center gap-[10px] lg:pl-[200px]  sm:pl-[18px]">
            <img src="src/assets/main/down (1).png" />
            <img src="src/assets/main/Path 2.png" className="w-[80%]" />
          </div>

          <div className="lg:pl-[264px] lg:py-[120px] flex justify-between items-start  sm:flex-wrap sm:py-[50px] sm:pl-[24px] sm:gap-[40px] lg:flex-nowrap">
            <aside className="flex flex-col items-start gap-[40px]">
              <Typography className="lg:w-[606px] uppercase text-white n1 sm:text-[32px] lg:text-[64px] ">
                {t("t26")}
              </Typography>
              <Typography className="lg:w-[461px] text-white nav">
                {t("t28")}
              </Typography>
            </aside>
            <aside className="flex flex-col items-start gap-[53px]">
              <img
                src="src/assets/main/pexels-ivan-samkov-5676744 (2).png"
                className="img"
              />
              <Typography className="lg:w-[500px] text-white nav">
                {t("t27")}
              </Typography>
            </aside>
          </div>
        </section>

        {/* section 2 */}
        <section className="sec py-[50px]">
          <TableContainer
            sx={{
              width: "95%",
              margin: "0 auto",
              paddingBottom: "50px",
              paddingTop: "10px",
            }}
          >
            <button
              className="bg-[hsl(161,45%,30%)] py-[5px] px-[15px] rounded-[5px] text-white mb-[20px]"
              onClick={() => {
                handleClickOpenAdd();
              }}
            >
             Add
            </button>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right" sx={{ textAlign: "start" }}>Img</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>Name</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>City</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>Phone</StyledTableCell>
                  <StyledTableCell align="right" sx={{ textAlign: "center" }}>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todo.map((e) => (
                  <StyledTableRow>
                    <StyledTableCell align="right" sx={{ textAlign: "center" }}>
                      {<img src={e.file} className="rounded-[50%] h-[100px] w-[100px]" />}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "white" }}
                    >
                      {e.name}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "white" }}
                    >
                      {e.city}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "white" }}
                    >
                      {e.number}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ textAlign: "center", color: "white" }}
                    >
                      <Box className="flex justify-center items-center gap-[20px]">
                        <button
                          className="bg-[#bf8080] px-[25px] text-[white] p-[8px] rounded-[10px]"
                          onClick={() => deleteUser(e.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-[#6a6a9e] px-[20px] text-[white] p-[8px] rounded-[10px]"
                          onClick={() => {
                            handleClickOpen();
                            setIdx(e.id);
                            setEditName(e.name);
                            setBase64F(e.file);
                            setEditCity(e.city);
                            setEditNumber(e.number);
                          }}
                        >
                          Edit
                        </button>
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>

        {/* section 3 */}
        <section className="bg-[#010F29]">
          <div className="lg:ml-[270px] sm:pb-[100px] lg:pb-[50px] lg:pt-[80px] sm:pt-[80px]">
            <div className="allThree lg:flex lg:ml-[55px]">
              <div className="lg:mr-[100px]">
                <h1 className="sm:text-[30px] sm:font-semibold sm:text-center sm:mt-[50px] lg:w-[150px] lg:text-start lg:text-[40px] text-[#fff]">
                  {t("text1")}
                </h1>
              </div>

              <div className="sm:flex sm:justify-around lg:ml-[50px]">
                <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] lg:w-[280px]">
                  <Card h1={t("text2")} img={img2} />
                </div>
                <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] lg:w-[280px] lg:ml-[20px]">
                  <Card h1={t("text2")} img={img2} />
                </div>
              </div>
            </div>

            <div className="flex sm:flex-wrap justify-around mt-[15px] lg:mt-[0px] lg:w-[900px] lg:ml-[45px] lg:pb-[100px]">
              <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] mt-[10px]  lg:w-[280px]">
                <Card h1={t("text2")} img={img3} />
              </div>
              <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] mt-[10px]  lg:w-[280px]">
                <Card h1={t("text2")} img={img4} />
              </div>
              <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] mt-[10px]  lg:w-[280px]">
                <Card h1={t("text2")} img={img5} />
              </div>
              <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] mt-[10px]  lg:w-[280px]">
                <Card h1={t("text2")} img={img6} />
              </div>
              <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] mt-[10px]  lg:w-[280px]">
                <Card h1={t("text2")} img={img7} />
              </div>
              <div className="bg-[#41458185] p-[20px] rounded-[10px] sm:w-[190px] mt-[10px] lg:w-[280px]">
                <button className="bg-gradient-to-r from-yellow-500 to-amber-500 lg:px-[60px] lg:py-[20px] rounded-[30px] lg:text-[20px] font-semibold lg:ml-[15px] lg:mt-[50px] px-[30px] py-[10px] ml-[8px] mt-[65px]">
                  {t("text3")}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section className="bg-[#010F29] text-[#fff]">
          <div className="all border-[2px] border-[gray] p-[15px] lg:flex lg:w-[970px] lg:p-[50px] lg:ml-[270px] sm:ml-[20px] sm:mr-[20px]">
            <div className="flex mb-[25px] lg:mt-[20px]">
              <div>
                <img src={img8} alt="" />
              </div>
              <div className=" ml-[20px] mt-[15px] w-[100px] lg:w-[200px] lg:ml-[80px]">
                <h1>{t("text4")}</h1>
                <h1>{t("text5")}</h1>
              </div>
            </div>

            <div className="p-[15px] w-[340px] lg:w-[400px] lg:mt-[20px] lg:ml-[50px]">
              <p>{t("text6")}</p>
            </div>
          </div>
        </section>

        {/* section 4 */}
        <section className="bg-[#010F29] text-[#fff]">
          <div className="all lg:flex lg:ml-[300px] lg:pt-[80px]">
            <div className="left">
              <h1 className="text-[40px] sm:pl-[30px] font-normal pt-[50px]">
                {t("text7")}
              </h1>
              <h1 className="text-[30px] sm:pl-[30px]">{t("text8")}</h1>
              <p className="text-[#E9F1FF] sm:w-[350px] sm:ml-[30px] sm:mt-[20px]">
                {t("text9")}
              </p>
            </div>
            <div className="right lg:mt-[130px] lg:ml-[150px]">
              <h1 className="sm:mt-[40px] sm:w-[300px] sm:ml-[30px]">
                {t("text10")}
              </h1>
              <h1 className="sm:mt-[40px] sm:w-[300px] sm:ml-[30px]">
                {t("text11")}
              </h1>
            </div>
          </div>
        </section>

        {/* section 5 */}
        <section className="bg-[#010F29]">
          <div className="all lg:flex lg:w-[1100px] lg:ml-[240px] lg:pb-[80px] sm:flex sm:flex-wrap sm:justify-between sm:px-[30px] sm:pt-[50px]">
            <div className="sm:mt-[30px]">
              <Card1 img={img9} h1={t("text12")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img10} h1={t("text12")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img11} h1={t("text12")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img12} h1={t("text12")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img13} h1={t("text12")} />
            </div>
          </div>
        </section>

        {/* section 6 */}
        <section className="bg-[#010F29] text-[#fff] lg:pl-[290px] lg:pb-[50px]">
          <h1 className="lg:text-[40px] sm:text-[28px] sm:pl-[30px] font-bold pt-[50px]">
            {t("text13")}
          </h1>
          <div className="two lg:flex">
            <div className="left sm:mt-[30px] sm:pl-[30px] sm:w-[350px] font-medium text-[18px] text-[#E9F1FF] lg:w-[430px] ">
              <h1>{t("text14")}</h1>
            </div>
            <div className="right lg:ml-[80px] sm:mt-[30px] sm:pl-[30px] sm:w-[350px] font-medium text-[18px] text-[#E9F1FF] lg:w-[430px] ">
              <h1>{t("text15")}</h1>
            </div>
          </div>
        </section>

        {/* section 7 */}
        <section className="bg-[#010F29]">
          <div className="all lg:flex lg:justify-between lg:w-[1100px] lg:ml-[240px] lg:pb-[80px] sm:flex sm:flex-wrap sm:justify-between sm:px-[30px] sm:pt-[50px]">
            <div className="sm:mt-[30px]">
              <Card1 img={img14} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img15} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img16} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img17} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img18} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img19} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img20} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img21} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img22} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img23} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img24} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img25} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px]">
              <Card1 img={img26} h1={t("text16")} />
            </div>
            <div className="sm:mt-[30px] lg:mr-[700px]">
              <Card1 img={img27} h1={t("text16")} />
            </div>
          </div>
          <div>
            <h1 className="text-[#fff] sm:text-[20px] font-semibold sm:text-center sm:mt-[35px] pb-[40px] lg:mt-[-200px] lg:text-[25px] lg:ml-[50px] lg:pb-[250px]">
              {t("text17")}
            </h1>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="bg-[#010F29] text-[#fff] sm:pt-[100px] lg:pt-[30px] pb-[50px]">
        <h1 className="text-[35px] font-bold lg:ml-[250px] sm:ml-[30px]">{t("text18")}</h1>
        <div className="all lg:flex lg:justify-between lg:w-[1000px] lg:ml-[250px]">

          <div className="left">
            <p className='text-[#E9F1FF] text-[12px] w-[200px] sm:text-[15px] sm:ml-[30px] sm:mt-[15px] sm:mb-[10px] lg:mt-[180px] lg:ml-[5px]'>{t("text23")}</p>
          </div>
          <div className="right sm:ml-[30px]">
            <input type="text" placeholder={t("text19")} className='bg-[#162240] sm:mt-[15px] px-[15px] py-[10px] rounded-[5px] w-[330px] lg:block ' />
            <input type="text" placeholder={t("text20")} className='bg-[#162240] sm:mt-[15px] px-[15px] py-[10px] rounded-[5px] w-[330px] lg:block ' />
            <input type="text" placeholder={t("text21")} className='bg-[#162240] sm:mt-[15px] px-[15px] py-[10px] rounded-[5px] w-[330px] lg:block ' />
            <input type="text" placeholder={t("text22")} className='bg-[#162240] sm:mt-[15px] px-[15px] py-[10px] rounded-[5px] w-[330px] lg:block ' />
            <button className='bg-gradient-to-r from-yellow-500 to-amber-500 px-[30px] py-[8px] rounded-[20px] sm:ml-[165px] sm:mt-[15px]'>Подать заявку</button>
          </div>
        </div>

      </footer>

      {/* //modal Edit*/}
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Edit User"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              id="alert-dialog-description"
            >
              <TextField
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              ></TextField>
              <TextField
                value={editNumber}
                onChange={(e) => setEditNumber(e.target.value)}
              ></TextField>
              <TextField
                value={editCity}
                onChange={(e) => setEditCity(e.target.value)}
              ></TextField>
              <FileBase64 multiple={false} onDone={handleImg} />
              <img src={base64F} className="rounded-[50%] w-[50px] h-[50px]" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Concel</Button>
            <Button
              onClick={() => {
                let obj = {
                  name: editName,
                  number: editNumber,
                  city: editCity,
                  file: base64F,
                };
                console.log(editNumber);
                editUser(idx, obj);
                handleClose();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      {/* modal add */}
      <React.Fragment>
        <Dialog
          open={openAdd}
          onClose={handleCloseAdd}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Add User"}</DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
              id="alert-dialog-description"
            >
              <TextField
                value={addName}
                onChange={(e) => setAddName(e.target.value)}
              ></TextField>
              <TextField
                value={addNumber}
                onChange={(e) => setAddNumber(e.target.value)}
              ></TextField>
              <TextField
                value={addCity}
                onChange={(e) => setAddCity(e.target.value)}
              ></TextField>
              <FileBase64 multiple={false} onDone={handleImg1} />
              <img src={base64F1} className="rounded-[50%] w-[50px] h-[50px]" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAdd}>Concel</Button>
            <Button
              onClick={() => {
                let user = {
                  name: addName,
                  city: addCity,
                  number: addNumber,
                  file: base64F1,
                };
                setAddName("");
                setAddCity("");
                setAddNumber("");
                addUser(user);
                handleCloseAdd();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default App



