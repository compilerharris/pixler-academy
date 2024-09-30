import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Profile = ({profile}) => {
    return (
      <Card className="mb-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={profile.img} style={{ width: '18rem',height: '18rem' }} />
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