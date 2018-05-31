import uuid from 'uuid';
import moment from 'moment';

// ADD_CURRICULUM
export const addCurriculum = (
    {
        name = '',
        surname = '',
        birthDate = moment(),
        city = '',
        province = '',
        country='',
        street = '',
        streetNumber = '',
        cellphoneNumber = '',
        landlinePhone = '',
        firstEmail = '',
        secondEmail = ''
    }= {}) => ({
    type: 'ADD_CURRICULUM',
    curriculum:{
        id: uuid(),
        name,
        surname,
        birthDate,
        city,
        province,
        country,
        street,
        streetNumber,
        cellphoneNumber,
        landlinePhone,
        firstEmail,
        secondEmail
    }
});

// REMOVE_CURRICULUM
export const removeCurriculum = ({ id } = {}) => ({
    type: 'REMOVE_CURRICULUM',
    id
});

// EDIT_CURRICULUM
export const editCurriculum = (id, update) => ({
    type: 'EDIT_CURRICULUM',
    id,
    update
});
