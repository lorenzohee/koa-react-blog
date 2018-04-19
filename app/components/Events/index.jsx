/**
 * Created at 16/3/19.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import React, { Component, PropTypes } from 'react';
import { Menu, Row, Col, Timeline } from 'antd';
import moment from 'moment'
const TimelineItem = Timeline.Item;

const typeMap = {
  error: 'red',
  normal: 'blue',
  success: 'green'
}

export default class EventsPage extends Component {
  render() {
    const { events } = this.props
    console.log('##events:##'+events.join(','))
    return (<Row className="page-events">
      <Col offset="4">
        <h2># 维护通知</h2>
        <Timeline>
          {
            events && events.reverse().map((event, key) => (
              <TimelineItem color={typeMap[event.type]} key={key}>
                <p>{event.event} {moment(event.time).format('YYYY-MM-DD HH:mm')}</p>
              </TimelineItem>
            ))
          }
        </Timeline>
      </Col>
    </Row>);
  }
}
