export default {
  async fetch(request, env) {
    const userId = "ID";
    const token = `Bot ${env.DISCORD_BOT_TOKEN}`;

    try {
      // Fetch Discord user data
      const userRes = await fetch(`https://discord.com/api/v10/users/${userId}`, {
        headers: { Authorization: token },
      });

      if (!userRes.ok) throw new Error("Failed to fetch Discord user");

      const userData = await userRes.json();

      // Determine image format
      const ext = userData.avatar?.startsWith("a_") ? "gif" : "png";
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${userData.avatar}.${ext}?size=1024`;

      // Redirect directly to the Discord avatar
      return Response.redirect(avatarUrl, 302);
    } catch (err) {
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  },
};
