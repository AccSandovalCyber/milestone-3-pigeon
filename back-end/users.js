getUserById: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  },
