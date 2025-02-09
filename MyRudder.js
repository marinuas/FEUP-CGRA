class MyRudder extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0, 0, 0,	//0
            0, 0.17, -0.3,	//1
            0, 0.17, -0.65,	//2
            0, -0.17, -0.65,	//3
            0, -0.17, -0.3,	//4

            0, 0, 0,	//0
            0, 0.17, -0.3,	//1
            0, 0.17, -0.65,	//2
            0, -0.17, -0.65,	//3
            0, -0.17, -0.3,	//4

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 4, 1,
            1, 4, 3,
            1, 3, 2,

            6, 9, 5,
            8, 9, 6,
            7, 8, 6,
            
        ];

        this.normals = [
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
        ];


        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}