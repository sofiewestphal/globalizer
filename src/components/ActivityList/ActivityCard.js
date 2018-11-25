import React from 'react';
import PropTypes from 'prop-types';
import arrowIcon from '../../assets/icons/other_icons/arrow_icon.svg';
import locationIcon from '../../assets/icons/other_icons/location_icon.svg';
import beautyIcon from '../../assets/icons/activity_icons/beauty-and-wellness_icon.svg';
import cultureIcon from '../../assets/icons/activity_icons/culture_icon.svg';
import familyIcon from '../../assets/icons/activity_icons/family_icon.svg';
import foodIcon from '../../assets/icons/activity_icons/food-and-drinks_icon.svg';
import gamesIcon from '../../assets/icons/activity_icons/games_icon.svg';
import hobbiesIcon from '../../assets/icons/activity_icons/hobbies-and-crafts_icon.svg';
import languageIcon from '../../assets/icons/activity_icons/language_icon.svg';
import moviesIcon from '../../assets/icons/activity_icons/movies_icon.svg';
import nightlifeIcon from '../../assets/icons/activity_icons/nightlife_icon.svg';
import outdoorIcon from '../../assets/icons/activity_icons/outdoor_icon.svg';
import sportsIcon from '../../assets/icons/activity_icons/sports_icon.svg';
import SecondaryButton from '../SecondaryButton';

const icons = {
  categories_beautyWellness: beautyIcon,
  categories_culture: cultureIcon,
  categories_family: familyIcon,
  categories_foodDrinks: foodIcon,
  categories_games: gamesIcon,
  categories_hobbiesCrafts: hobbiesIcon,
  categories_language: languageIcon,
  categories_movies: moviesIcon,
  categories_nightlife: nightlifeIcon,
  categories_outdoor: outdoorIcon,
  categories_sports: sportsIcon,
};

class ActivityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
    };
  }

  toggleDesription = () => {
    const { showDescription } = this.state;
    this.setState({
      showDescription: !showDescription,
    });
  }

  render() {
    const {
      category, date, title, location, description, owner, attendees, maxNumberOfAttendees,
    } = this.props;

    const currentNumberOfAttendees = attendees.length + 1;
    const { showDescription } = this.state;

    const containerClassName = showDescription ? 'activityCardContainer showDescription' : 'activityCardContainer';

    return (
      <div className="row">
        <div className={containerClassName}>

          <div className="col-xs-10">
            <div className="row flexContainer">

              <div className="col-xs-3">
                <div className="iconContainer">
                  <img src={icons[category]} className="categoryIcon" alt="category icon" />
                </div>
              </div>

              <div className="col-xs-9">
                <div className="textContainer">
                  <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    <p className="location">
                      <span>
                        <img src={locationIcon} alt="location icon" />
                      </span>
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-9 col-xs-offset-3">
                <div className="activityCardDetails" style={{}}>
                  <p>{description}</p>
                  <div className="attendeesContainer">
                    <p>{`Attendees (${currentNumberOfAttendees}/${maxNumberOfAttendees})`}</p>
                  </div>
                  <div className="attendContainer">
                    <SecondaryButton
                      id="btnToggleAttend"
                      title="Attend"
                      handleClick={() => {
                        console.log('btnToggleAttend clicked');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-2">
            <div className="toggleContainer">
              <button
                className="btnTtoggleActivityCard"
                type="button"
                onClick={() => this.toggleDesription()}
              >
                <img src={arrowIcon} alt="toggle activity card" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ActivityCard.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  owner: PropTypes.number.isRequired,
  attendees: PropTypes.array.isRequired,
  maxNumberOfAttendees: PropTypes.number.isRequired,
};

export default ActivityCard;
