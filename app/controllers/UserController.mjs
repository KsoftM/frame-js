import { request, response } from "express";

class UserController {
  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async store(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async index(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async create(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async show(req, res) {
    return res.status(200).json(req.params.id);
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async edit(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async update(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async destroy(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async view(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async grid(req, res) {
    return res.status(404).json("I dont have that");
  }

  /**
   *
   * @param {request} req
   * @param {response} res
   * @returns
   */
  async form(req, res) {
    return res.status(404).json("I dont have that");
  }
}

export default new UserController();
