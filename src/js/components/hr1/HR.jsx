import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/Menu/MenuItem';
import { FormControlLabel } from 'material-ui/Form';

import { withStyles } from 'material-ui/styles';

import Hero from '../hero/HeroImage';
import Subjects from './Subjects';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  menu: {
    width: 20,
    fontSize: '2rem'
  }
});

const studentClasses = [
  {
    value: 'pg',
    label: 'Playgroup'
  },
  {
    value: 'nursery',
    label: 'Nursey'
  },
  {
    value: 'prep',
    label: 'Prep'
  },
  {
    value: '1',
    label: 'Class 1'
  },
  {
    value: '2',
    label: 'Class 2'
  },
  {
    value: '3',
    label: 'Class 3'
  },
  {
    value: '4',
    label: 'Class 4'
  },
  {
    value: '5',
    label: 'Class 5'
  },
  {
    value: '6',
    label: 'Class 6'
  },
  {
    value: '7',
    label: 'Class 7'
  },
  {
    value: '8',
    label: 'Class 8'
  },
  {
    value: '9',
    label: 'Class 9'
  },
  {
    value: '10',
    label: 'Class 10'
  }
];

const sections = [
  {
    value: 'a',
    label: 'Section A'
  },
  {
    value: 'b',
    label: 'Section B'
  },
  {
    value: 'c',
    label: 'Section C'
  },
  {
    value: 'd',
    label: 'Section D'
  }
];

class HR extends React.Component {
  constructor() {
    super();
    this.state = {
      studentClass: '',
      section: '',
      subjects: null
    };

    this.handleSection = this.handleSection.bind(this);
    this.handleClass = this.handleClass.bind(this);
  }

  handleSubjects = value => {
    console.log('selectedItem');
    this.setState({
      subjects: value
    });
  };

  handleSection(e) {
    this.setState({ section: e.target.value });
  }

  handleClass(e) {
    this.setState({ studentClass: e.target.value });
  }

  render() {
    const { classes } = this.props;
    console.log('hr', this.state.inputValue, this.state.selectedItem);

    return (
      <div>
        <Hero style={'header-image'} />
        <div id="hr">
          <div className="wrapper">
            <form className={classes.container}>
              <div className="form-section">
                <div className="paper-header">Candidate Details</div>
                <Paper className="paper" elevation={6}>
                  <TextField
                    id="candidate-name"
                    label="Candidate Name"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="b-form"
                    label="B Form #"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="dob"
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' },
                      shrink: true
                    }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="id-mark"
                    label="Identification Mark"
                    type="text"
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                    }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox color="primary" inputProps={{ style: {} }} />
                    }
                    label="Hafiz"
                    className="checkBoxField"
                    classes={{ label: 'checkBoxLabel' }}
                  />
                </Paper>
              </div>
              <div className="form-section">
                <div className="paper-header">Father Details</div>
                <Paper className="paper" elevation={10}>
                  <TextField
                    id="father-name"
                    label="Father's Name"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="father-cnic"
                    label="CNIC #"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="father-mobile"
                    label="Father Mobile #"
                    type="search"
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                    }}
                    InputProps={{
                      style: { fontSize: '2rem', width: 400 }
                    }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="father-address"
                    label="Home Address"
                    type="text"
                    multiline
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                    }}
                    InputProps={{
                      style: {
                        fontSize: '2rem',
                        width: 400,
                        textIndent: 0
                      },
                      classes: { inputMultiline: 'textarea' }
                    }}
                    className="textField"
                    margin="normal"
                  />
                </Paper>
              </div>
              <div className="form-section">
                <div className="paper-header">Class Details</div>
                <Paper className="paper" elevation={10}>
                  <TextField
                    id="admission-number"
                    label="Admission #"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="computer-number"
                    label="Computer #"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="class"
                    select
                    label="Class"
                    className="textField"
                    value={this.state.studentClass}
                    onChange={this.handleClass}
                    SelectProps={{
                      style: { fontSize: '2rem', width: 400 },
                      MenuProps: {
                        className: 'checkBoxLabel'
                      }
                    }}
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                      // shrink: false
                    }}
                    margin="normal"
                  >
                    {studentClasses.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="section"
                    select
                    label="Section"
                    className="textField"
                    value={this.state.section}
                    onChange={this.handleSection}
                    SelectProps={{
                      style: { fontSize: '2rem', width: 400 },
                      MenuProps: {
                        className: 'checkBoxLabel'
                      }
                    }}
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                      // shrink: false
                    }}
                    margin="normal"
                  >
                    {sections.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Subjects
                    subjects={this.state.subjects}
                    handleChange={this.handleSubjects}
                  />
                </Paper>
              </div>
              <div className="form-section">
                <div className="paper-header">Emergency Details</div>
                <Paper className="paper" elevation={6}>
                  <TextField
                    id="emergency-name"
                    label="Contact Name"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="emergency-relation"
                    label="Relationship #"
                    type="search"
                    InputLabelProps={{ style: { fontSize: '1.8rem' } }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="emergency-number"
                    label="Contact Mobile #"
                    type="search"
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                    }}
                    InputProps={{ style: { fontSize: '2rem', width: 400 } }}
                    className="textField"
                    margin="normal"
                  />
                  <TextField
                    id="medical-notes"
                    label="Medical Notes"
                    type="text"
                    multiline
                    InputLabelProps={{
                      style: { fontSize: '1.8rem' }
                    }}
                    InputProps={{
                      style: {
                        fontSize: '2rem',
                        width: 400,
                        textIndent: 0
                      },
                      classes: { inputMultiline: 'textarea' }
                    }}
                    className="textField"
                    margin="normal"
                  />
                </Paper>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HR);
