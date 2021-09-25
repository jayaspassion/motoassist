import { Layout, Menu, Button, List, Space, Tooltip, Modal } from 'antd';
import bg2 from "./bg2.jpg";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBookings } from '../actions/booking';
import '../User.css';
import '../App.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const UserComponent = () => {

  let history = useHistory();
  const createBooking = (event) => {
    history.push('/newbooking')
  }
  const token = JSON.parse(window.localStorage.getItem('user')).token
  const email = JSON.parse(window.localStorage.getItem('user')).user.email
  const userName = JSON.parse(window.localStorage.getItem('user')).user.name 

  const [bookingsList, setBookingsList] = useState([]);
  const [showBookings, setShowBookings] = useState(false);

  const fetchBookings = async () => {
    const bookingsTemp = await getBookings(token, email);
    const bookings = bookingsTemp.data;
    bookings.map((each, index) => {
      if (each.bikeNumber != undefined) {
        bookingsList.push(
          { title: each.bikeManufacturer+' '+each.bikeNumber, 
            description: each.serviceDate.split("T")[0]
          });
      }
    })
    console.log(bookingsList)

  }
  useEffect(() => {
    fetchBookings();
  }, []);


  return (
    <>

      <Layout>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="1" onClick={() => setShowBookings(false)}>My Profile</Menu.Item>
          <Menu.Item key="2" onClick={() => setShowBookings(true) }>My Bookings</Menu.Item>
        </Menu>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title="Welcome!">
                <Menu.Item key="2">
                  <Button type="primary" onClick={createBooking}>
                    New Booking
                </Button>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            < Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 600 }}>
              {showBookings && <List
                itemLayout="horizontal"
                dataSource={bookingsList}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={"Service Date : "+item.description}
                    />
                  </List.Item>
                )}
              />}
              {!showBookings && 
                <section >
                  <div className="home-header" style={{height: "20rem" , backgroundImage : `url(${bg2})`, backgroundSize : "50rem"}}>
                    <h3 className="home-header-text">BOOKING</h3>
                  </div>
                  <div className="flex-user" >
                    <h3>Good Day {userName}!</h3>
                    <h5>Book your service now.</h5>
                  </div>
                </section>
                
              }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default UserComponent;