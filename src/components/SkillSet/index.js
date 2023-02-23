import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

const SkillSet = ({ skills, isDisabled }) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const handleDelete = (index) => {
    return skills.filter((_, i) => i !== index);
  };

  return (
    <div>
      {skills.map((skill, index) => (
        <div key={index}>
          <Row className="align-items-center">
            <Col md={4}>
              <FormGroup key={index}>
                <Label for="skill">Skill</Label>
                <Input id="skill" name="skill" disabled={isDisabled} value={skill?.skill} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="year_of_exp">Years Of Experience</Label>
                <Input
                  id="year_of_exp"
                  type="number"
                  name="year_of_exp"
                  disabled={isDisabled}
                  value={skill?.year_of_exp}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="seniority_rating">Seniority Ratings</Label>
                <Input
                  id="seniority_rating"
                  type="select"
                  name="seniority_rating"
                  disabled={isDisabled}
                  value={skill?.seniority_rating}
                />
              </FormGroup>
            </Col>
            {!isDisabled && (
              <Col md={2} className="mt-3">
                {isConfirming ? (
                  <div>
                    <Button className="mr-1" onClick={() => setIsConfirming(false)}>
                      <i className="material-icons">close</i>
                    </Button>
                    <Button color="primary" onClick={() => handleDelete(index)}>
                      <i className="material-icons">check</i>
                    </Button>
                  </div>
                ) : (
                  <Button color="danger" onClick={() => setIsConfirming(true)}>
                    <i className="material-icons">delete</i>
                  </Button>
                )}
              </Col>
            )}
          </Row>
        </div>
      ))}
    </div>
  );
};

SkillSet.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default SkillSet;
