import React from 'react'
import AddToCalendar from 'react-add-to-calendar'

export class Event extends React.Component {
  render() {
    const event = {
      title: "Christopher Cole & Michelle Liang's Wedding",
      description: 'A calendar invite to our wedding.',
      location: '21156 Karen-Switch Rd, Magnolia, TX 77354',
      startTime: '2021-05-22T17:30:00-05:00',
      endTime: '2021-05-22T23:00:00-05:00',
    }

    const icon = { textOnly: 'none' }

    const items = [{ apple: 'Apple Calendar' }, { google: 'Google' }]
    return (
      <AddToCalendar
        event={event}
        displayItemIcons={false}
        buttonLabel="#ColeLottaLove | May 5th, 2021"
        buttonTemplate={icon}
        listItems={items}
      />
    )
  }
}
