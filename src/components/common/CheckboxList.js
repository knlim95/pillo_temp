import React, { Component } from 'react';
import { FormGroup } from 'reactstrap';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';

class CheckboxList extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);
  }

  createTasks(item) {
    return (
      <FormGroup check key={item.key}>
        <Checkbox labelDescription={item.text} />
      </FormGroup>
    );
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var checkboxList = this.props.list;
    var listItems = checkboxList.map(this.createTasks);

    return <div>{listItems}</div>;
  }
}

export default CheckboxList;
