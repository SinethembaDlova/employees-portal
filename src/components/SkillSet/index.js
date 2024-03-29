import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap';
import SENIORITY_RATINGS from '../../constants/seniorityRatings';

const SkillSet = ({ skills, isDisabled }) => {
  const [newSkill, setNewSkill] = useState({ skill: '', year_of_exp: 0, seniority_rating: '' });
  const [isConfirming, setIsConfirming] = useState(null);
  const [errors, setErrors] = useState({
    skill: false,
    year_of_exp: false,
    seniority_rating: false,
  });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setNewSkill({ ...newSkill, [name]: value });
  };

  const handleConfirming = (index) => {
    setIsConfirming(index);
  };

  const handleDelete = (index) => {
    skills.splice(index, 1);
    setIsConfirming(null);
  };

  const handleAdding = () => {
    setErrors({
      skill: newSkill.skill.length === 0,
      year_of_exp: newSkill.year_of_exp < 1,
      seniority_rating:
        newSkill.seniority_rating.length === 0 ||
        newSkill.seniority_rating === 'Please select an option',
    });

    setTimeout(() => {
      const formIsValid = Object.values(errors).every((error) => error === false);
      if (formIsValid) {
        skills.push(newSkill);
        setNewSkill({ skill: '', year_of_exp: 0, seniority_rating: '' });
      }
    }, 0);
  };

  return (
    <div>
      <Row>
        <Col md={4}>
          <Label for="skill">Skill</Label>
        </Col>
        <Col md={3}>
          <Label for="year_of_exp">Years Of Experience</Label>
        </Col>
        <Col md={3}>
          <Label for="seniority_rating">Seniority Ratings</Label>
        </Col>
      </Row>
      {skills.length > 0 &&
        skills.map((skill, index) => (
          <Row className="" key={index}>
            <Col md={4}>
              <FormGroup>
                <Input id="skill" name="skill" disabled={true} value={skill?.skill} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input
                  id="year_of_exp"
                  type="number"
                  name="year_of_exp"
                  disabled={true}
                  value={skill?.year_of_exp}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input id="seniority_rating" type="select" name="seniority_rating" disabled={true}>
                  <option value={skill?.seniority_rating}>{skill?.seniority_rating}</option>
                </Input>
              </FormGroup>
            </Col>
            {!isDisabled && (
              <Col md={2}>
                {isConfirming === index ? (
                  <div>
                    <Button className="mr-1" size="sm" onClick={() => setIsConfirming(null)}>
                      <i className="material-icons">close</i>
                    </Button>
                    <Button color="primary" size="sm" onClick={() => handleDelete(index)}>
                      <i className="material-icons">check</i>
                    </Button>
                  </div>
                ) : (
                  <Button color="danger" size="sm" onClick={() => handleConfirming(index)}>
                    <i className="material-icons">delete</i>
                  </Button>
                )}
              </Col>
            )}
          </Row>
        ))}
      {!isDisabled && (
        <Row>
          <Col md={4}>
            <FormGroup>
              <Input
                id="skill"
                name="skill"
                disabled={isDisabled}
                value={newSkill?.skill}
                invalid={errors?.skill}
                onChange={handleInputChange}
              />
              <FormFeedback>Skill is a required field.</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input
                id="year_of_exp"
                type="number"
                name="year_of_exp"
                disabled={isDisabled}
                invalid={errors?.year_of_exp}
                onChange={handleInputChange}
                value={newSkill?.year_of_exp}
              />
              <FormFeedback>Years Of Experience must be greater than zero.</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input
                id="seniority_rating"
                type="select"
                name="seniority_rating"
                disabled={isDisabled}
                invalid={errors?.seniority_rating}
                onChange={handleInputChange}>
                <option value="">Please select an option</option>
                {SENIORITY_RATINGS.map((senior_rating) => {
                  return (
                    <option key={senior_rating} value={senior_rating}>
                      {senior_rating}
                    </option>
                  );
                })}
              </Input>
              <FormFeedback>Seniority Rating is a required field.</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={2}>
            <Button color="primary" size="sm" onClick={handleAdding}>
              <i className="material-icons">add</i>
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
};

SkillSet.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default SkillSet;
