"use client";

import React, { useState, useEffect } from "react";

import RecipeList from "../../../../components/Jarvis/Recipie/RecipeList";
import { RecipeService } from "../../../../services/recipe.service";
import Empty_Image from "../../../../../public/images/empty_image.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Page({ params }) {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeTitleData, setRecipeTitleData] = useState(null);
  const imgUrls = getRecipesImages(recipeTitleData?.image_url);
  const [recipeLoading, setRecipeLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (params?.id) {
      getRecipes(params?.id);
    }
  }, [params?.id]);

  async function getRecipes(recipeId) {
    try {
      setRecipeLoading(true);
      const response = await RecipeService.getRecipes(recipeId);
      const titleResponse = await RecipeService.getRecipesTitle(recipeId);

      if (titleResponse.items.length) {
        setRecipeTitleData(titleResponse.items[0]);
      }

      if (response?.items.length) {
        setRecipeData(response.items);
      } else {
        setError("No Recipe Found");
      }
      setRecipeLoading(false);
    } catch (error) {
      setRecipeLoading(false);

      if (error?.message) {
        setError(error.message);
        // alert(error.message);
      }
    }
  }

  function getRecipesImages(imgUrls) {
    if (!imgUrls) return;
    const urls = imgUrls.split(", ");
    return urls;
  }

  return (
    <>
      <div
        className="min-h-[100vh] xs:px-2 sm:px-4 md:px-4 lg:px-8  xl:px-24 bg-gradient-to-r
from-[#0f172a]
to-[#334155] "
      >
        {/* jarvis logo  */}
        <div className="flex flex-row items-center justify-center gap-2 md:p-6  ">
          <div className="size-12   mt-10 md:mt-2 ">
            <img src="/images/jarvis.png" />
          </div>
          <h1
            className={`uppercase  bold text-blue-400 primary-font mt-10 md:mt-2 text-2xl  `}
          >
            J.a.r.v.i.s
          </h1>
        </div>

        {recipeLoading ? (
          <>
            <div className="flex items-center justify-center   pt-3 mt-10">
              <div className="relative">
                <div className="relative w-32 h-32">
                  <div
                    className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-blue-400 border-b-blue-400 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <div
                    className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-blue-400 animate-spin"
                    style={{
                      animationDuration: "2s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-blue-400/5 animate-pulse rounded-full blur-sm" />
              </div>
            </div>
          </>
        ) : error ? (
          <>
            <div className="h-[100%] mt-10 items-center justify-center flex  max-w-xs mx-auto text-center">
              <h1 className="text-2xl md:4xl text-white">{error}</h1>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10">
              <div className="flex flex-col items-center ">
                <h1 className="text-white text-center font-extrabold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  {recipeTitleData?.fabric ?? "N/A"}
                </h1>

                {imgUrls && imgUrls.length > 0 ? (
                  <div className="  overflow-hidden relative mt-6 rounded-xl shadow-lg ring-2 ring-gray-500 sm:mt-8 w-[90%] xs:w-[90%] sm:w-[90%] md:w-[85%] lg:max-w-[30%]  flex flex-col justify-center items-center ">
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      className=" w-full  h-[300px]"
                    >
                      {imgUrls.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt="recipe img"
                          className="object-contain  h-[300px] "
                        />
                      ))}
                    </Carousel>
                  </div>
                ) : (
                  <img
                    src={Empty_Image.src}
                    alt="no image"
                    className="object-contain h-[300px]"
                  />
                )}
              </div>

              {/* <div className="flex gap-4">
            <div className="size-8">
              <img src="/images/jarvis.png" />
            </div>
            <div>
              <div className="p-2 bg-[#e5e7eb] bg-stone-800">
                <h5 className="text-sm uppercase">RECIPE CODE</h5>
                <h4 className="text-lg primary-font">ZARA BASIC 638/24</h4>
              </div>
            </div>
          </div> */}
            </div>

            <div>
              <RecipeList recipeData={recipeData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Page;
