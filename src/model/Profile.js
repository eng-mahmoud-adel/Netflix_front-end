class Profile {

    constructor(object = {}) {
        this._id = object.id;
        this.name = object.name;
        this._image = object.image;
        this._isKid = object.isKid;
        this.user = object.user
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get image() {
        return this._image;
    }

    set image(value) {
        this._image = value;
    }

    get isKid() {
        return this._isKid;
    }

    set isKid(value) {
        this._isKid = value;
    }

    get user() {
        return this._user;
    }
}

export default Profile;

