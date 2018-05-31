import moment from 'moment';

export default (curricula, { name, surname, sortBy, startBirthDate, endBirthDate }) => {
  return curricula.filter((curriculum) => {
    const birthDate = moment(curriculum.birthDate);
    const startBirthDateMoment = startBirthDate && moment(startBirthDate);
    const endBirthDateMoment = endBirthDate && moment(endBirthDate);
    const startBirthDateMatch = startBirthDateMoment ? startBirthDateMoment.isSameOrBefore(birthDate, 'day') : true;
    const endBirthDateMatch = endBirthDateMoment ? endBirthDateMoment.isSameOrAfter(birthDate, 'day') : true;
    const nameMatch = curriculum.name.toLowerCase().includes(name.toLowerCase());
    const surnameMatch = curriculum.surname.toLowerCase().includes(surname.toLowerCase());

    return startBirthDateMatch && endBirthDateMatch && nameMatch && surnameMatch;
  }).sort((a, b) => {
    if (sortBy === 'birthDate') {
      return a.birthDate < b.birthDate ? 1 : -1;
    } else if (sortBy === 'name') {
      return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
    } else if (sortBy === 'surname') {
      return a.surname.toUpperCase() > b.surname.toUpperCase() ? 1 : -1;
    }
  });
};
 