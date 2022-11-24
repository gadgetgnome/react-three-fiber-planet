import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import styles from "./index.module.css";
import App from "./components/App";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Canvas
      className={styles.canvas}
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
      gl={{
        alpha: true,
        antialias: true,
        // toneMapping: THREE.sRGBEncoding
      }}
    >
      <App />
    </Canvas>
    <div className="sections">
      <h1>3D Primitives</h1>
      <section>
        <h2>The Cube</h2>
        <p>
          The cube is the only{" "}
          <a href="/wiki/Regular_polyhedron" title="Regular polyhedron">
            regular
          </a>{" "}
          <a href="/wiki/Hexahedron" title="Hexahedron">
            hexahedron
          </a>{" "}
          and is one of the five{" "}
          <a href="/wiki/Platonic_solid" title="Platonic solid">
            Platonic solids
          </a>
          . It has 6 faces, 12 edges, and 8 vertices.
        </p>
        <p>
          The cube is also a square{" "}
          <a href="/wiki/Parallelepiped" title="Parallelepiped">
            parallelepiped
          </a>
          , an equilateral{" "}
          <a href="/wiki/Cuboid" title="Cuboid">
            cuboid
          </a>{" "}
          and a right{" "}
          <a href="/wiki/Rhombohedron" title="Rhombohedron">
            rhombohedron
          </a>{" "}
          a <b>3</b>-
          <a href="/wiki/Zonohedron" title="Zonohedron">
            zonohedron
          </a>
          . It is a regular square{" "}
          <a href="/wiki/Prism_(geometry)" title="Prism (geometry)">
            prism
          </a>{" "}
          in three orientations, and a{" "}
          <a href="/wiki/Trigonal_trapezohedron" title="Trigonal trapezohedron">
            trigonal trapezohedron
          </a>{" "}
          in four orientations.
        </p>
        <p>
          The cube is{" "}
          <a href="/wiki/Dual_polyhedron" title="Dual polyhedron">
            dual
          </a>{" "}
          to the{" "}
          <a href="/wiki/Octahedron" title="Octahedron">
            octahedron
          </a>
          . It has cubical or{" "}
          <a href="/wiki/Octahedral_symmetry" title="Octahedral symmetry">
            octahedral symmetry
          </a>
          .
        </p>
        <p>
          The cube is the only convex polyhedron whose faces are all{" "}
          <a href="/wiki/Square" title="Square">
            squares
          </a>
          .
        </p>
      </section>
      <section>
        <h2>The Sphere</h2>
        <p>
          A <b>sphere</b> (from&#32;
          <a
            href="/wiki/Ancient_Greek_language"
            className="mw-redirect"
            title="Ancient Greek language"
          >
            Ancient Greek
          </a>
          &#32;<i> </i>
          <span lang="grc">
            <a
              href="https://en.wiktionary.org/wiki/%CF%83%CF%86%CE%B1%E1%BF%96%CF%81%CE%B1#Ancient_Greek"
              className="extiw"
              title="wikt:σφαῖρα"
            >
              σφαῖρα
            </a>
          </span>
          <i>
            {" "}
            (
            <span title="Ancient Greek transliteration" lang="grc-Latn">
              <i>sphaîra</i>
            </span>
            )
          </i>
          &#160;'globe, ball')
          <sup id="cite_ref-1" className="reference">
            <a href="#cite_note-1">&#91;1&#93;</a>
          </sup>{" "}
          is a{" "}
          <a href="/wiki/Geometry" title="Geometry">
            geometrical
          </a>{" "}
          object that is a{" "}
          <a href="/wiki/Solid_geometry" title="Solid geometry">
            three-dimensional
          </a>{" "}
          analogue to a two-dimensional{" "}
          <a href="/wiki/Circle" title="Circle">
            circle
          </a>
          . A sphere is the{" "}
          <a href="/wiki/Locus_(mathematics)" title="Locus (mathematics)">
            set of points
          </a>{" "}
          that are all at the same distance{" "}
          <span className="texhtml">
            <i>r</i>
          </span>{" "}
          from a given point in three-dimensional space.
          <sup id="cite_ref-Albert54_2-0" className="reference">
            <a href="#cite_note-Albert54-2">&#91;2&#93;</a>
          </sup>{" "}
          That given point is the{" "}
          <a href="/wiki/Centre_(geometry)" title="Centre (geometry)">
            centre
          </a>{" "}
          of the sphere, and{" "}
          <span className="texhtml">
            <i>r</i>
          </span>{" "}
          is the sphere's radius. The earliest known mentions of spheres appear
          in the work of the{" "}
          <a href="/wiki/Greek_mathematics" title="Greek mathematics">
            ancient Greek mathematicians
          </a>
          .
        </p>
        <p>
          The sphere is a fundamental object in many fields of{" "}
          <a href="/wiki/Mathematics" title="Mathematics">
            mathematics
          </a>
          . Spheres and nearly-spherical shapes also appear in nature and
          industry.{" "}
          <a href="/wiki/Bubble_(physics)" title="Bubble (physics)">
            Bubbles
          </a>{" "}
          such as{" "}
          <a href="/wiki/Soap_bubble" title="Soap bubble">
            soap bubbles
          </a>{" "}
          take a spherical shape in equilibrium.{" "}
          <a href="/wiki/Spherical_Earth" title="Spherical Earth">
            The Earth is often approximated as a sphere
          </a>{" "}
          in{" "}
          <a href="/wiki/Geography" title="Geography">
            geography
          </a>
          , and the{" "}
          <a href="/wiki/Celestial_sphere" title="Celestial sphere">
            celestial sphere
          </a>{" "}
          is an important concept in{" "}
          <a href="/wiki/Astronomy" title="Astronomy">
            astronomy
          </a>
          . Manufactured items including{" "}
          <a
            href="/wiki/Pressure_vessels"
            className="mw-redirect"
            title="Pressure vessels"
          >
            pressure vessels
          </a>{" "}
          and most{" "}
          <a href="/wiki/Curved_mirror" title="Curved mirror">
            curved mirrors
          </a>{" "}
          and{" "}
          <a href="/wiki/Lens" title="Lens">
            lenses
          </a>{" "}
          are based on spheres. Spheres{" "}
          <a href="/wiki/Rolling" title="Rolling">
            roll
          </a>{" "}
          smoothly in any direction, so most{" "}
          <a href="/wiki/Ball" title="Ball">
            balls
          </a>{" "}
          used in sports and toys are spherical, as are{" "}
          <a
            href="/wiki/Ball_bearings"
            className="mw-redirect"
            title="Ball bearings"
          >
            ball bearings
          </a>
          .
        </p>
      </section>
      <section>
        <h2>A Game Engine</h2>
        <p>A <b>game engine</b> is a <a href="/wiki/Software_framework" title="Software framework">software framework</a> primarily designed for the development of <a href="/wiki/Video_game" title="Video game">video games</a> and generally includes relevant <a href="/wiki/Library_(computing)" title="Library (computing)">libraries</a> and support programs.<sup id="cite_ref-1" className="reference"><a href="#cite_note-1">&#91;1&#93;</a></sup>  The "engine" terminology is similar to the term "<a href="/wiki/Software_engine" title="Software engine">software engine</a>" used in the <a href="/wiki/Software_industry" title="Software industry">software industry</a>.
</p><p>The game engine can also refer to the development software utilizing this framework, typically offering a suite of tools and features for developing games.<sup id="cite_ref-2" className="reference"><a href="#cite_note-2">&#91;2&#93;</a></sup><sup id="cite_ref-3" className="reference"><a href="#cite_note-3">&#91;3&#93;</a></sup>
</p><p><a href="/wiki/Video_game_developer" title="Video game developer">Developers</a> can use game engines to construct games for <a href="/wiki/Video_game_consoles" className="mw-redirect" title="Video game consoles">video game consoles</a> and other types of <a href="/wiki/Computer" title="Computer">computers</a>. The core functionality typically provided by a game engine may include a <a href="/wiki/Rendering_(computer_graphics)" title="Rendering (computer graphics)">rendering</a> engine ("renderer") for <a href="/wiki/2D_computer_graphics" title="2D computer graphics">2D</a> or <a href="/wiki/3D_computer_graphics" title="3D computer graphics">3D</a> <a href="/wiki/Computer_graphics" title="Computer graphics">graphics</a>, a <a href="/wiki/Physics_engine" title="Physics engine">physics engine</a> or <a href="/wiki/Collision_detection" title="Collision detection">collision detection</a> (and collision response), <a href="/wiki/Sound" title="Sound">sound</a>, <a href="/wiki/Scripting_language" title="Scripting language">scripting</a>, <a href="/wiki/Computer_animation" title="Computer animation">animation</a>, <a href="/wiki/Game_AI" className="mw-redirect" title="Game AI">artificial intelligence</a>, <a href="/wiki/Computer_networking" className="mw-redirect" title="Computer networking">networking</a>, streaming, <a href="/wiki/Memory_management" title="Memory management">memory management</a>, <a href="/wiki/Thread_(computing)" title="Thread (computing)">threading</a>, <a href="/wiki/Internationalization_and_localization" title="Internationalization and localization">localization</a> support, <a href="/wiki/Scene_graph" title="Scene graph">scene graph</a>, and video support for  <a href="/wiki/Cinematic_cutscene" className="mw-redirect" title="Cinematic cutscene">cinematics</a>. Game engine implementers often economize on the process of <a href="/wiki/Game_development" className="mw-redirect" title="Game development">game development</a> by reusing/adapting, in large part, the same game engine to produce different games<sup id="cite_ref-4" className="reference"><a href="#cite_note-4">&#91;4&#93;</a></sup>
or to aid in <a href="/wiki/Porting" title="Porting">porting</a> games to multiple platforms.
</p>
      </section>
    </div>
  </React.StrictMode>
);
