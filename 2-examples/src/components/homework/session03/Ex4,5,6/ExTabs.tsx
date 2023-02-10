import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import styles from './Tabs.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsBoxSeam} from 'react-icons/bs'

type Props = {}

const ExTabs = () => {

  return (
    <>
      <Container className='py-4'>
        <Row className='justify-content-center'>
          <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
            <Tab eventKey="tab-1" title="Tab 1">
                Tab 1 content
            </Tab>
            <Tab eventKey="tab-2" title="Tab 2">
                Tab 2 content
            </Tab>
            <Tab eventKey="tab-3" title="Tab 3">
                Tab 3 content
            </Tab>
          </Tabs>
        </Row>
      </Container>
      {/* <Container className='py-4'>
        <Row className='justify-content-center'>
          <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
            <Tab eventKey="tab-1" title="Tab 1" className='NoBg'>
                Tab 1 content
            </Tab>
            <Tab eventKey="tab-2" title="Tab 2">
                Tab 2 content
            </Tab>
            <Tab  eventKey="tab-3" title="Tab 3">
                Tab 3 content
            </Tab>
          </Tabs>
        </Row>
      </Container> */}
     {/*  <div className="bloc-tabs" >
        <div className={tabs === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => handleTabs(1)} >Tab1</div>
        <div className={tabs === 2 ? "tabs active-tabs" : "tabs"} onClick={() => handleTabs(2)}>Tab2</div>
        <div className={tabs === 3 ? "tabs active-tabs" : "tabs"} onClick={() => handleTabs(3)}>Tab3</div>
      </div>
      <div className="content-tabs">
        <div className={tabs === 1 ? "content active-content" : "content"}>
          <h2>Content1</h2>
          <hr />
          <p>Xao tung của xiên xai bing chiu ling.
            Gủa hấn cao xing bing chiu ling.
          </p>
        </div>
        <div className={tabs === 2 ? "content active-content" : "content"}>
          <h2>Content2</h2>
          <hr />
          <p>Soong thủng là coi như hỏng
            Bao thủng là do chuột cắn.
          </p>
        </div>
        <div className={tabs === 3 ? "content active-content" : "content"}>
          <h2>Content3</h2>
          <hr />
          <p>Gì gì đó
          </p>
        </div>
      </div> */}
  </>
  )
}

export default ExTabs;