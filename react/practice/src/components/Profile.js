import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profile = ({profile}) => {
    return (
      <Card className="col-md-4 m-2" style={{ width: '18rem' }}>
        <Card.Img src={profile.img} />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>{profile.about}</Card.Text>
          <Card.Link href={profile.profileUrl} target="_blank">
            <Button variant="primary">Visit {profile.name}'s Profile</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    )
}

export default Profile;