#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 TexCoord;

// texture samplers
uniform sampler2D atex;
uniform sampler2D texture2;
uniform float mixValue;

void main()
{
	// linearly interpolate between both textures (80% container, 20% awesomeface)
	vec2 TexCoord2 = TexCoord;
	// TexCoord2.x = 1-TexCoord.x;

	FragColor = mix(texture(atex, TexCoord), texture(texture2, TexCoord2), mixValue);
}