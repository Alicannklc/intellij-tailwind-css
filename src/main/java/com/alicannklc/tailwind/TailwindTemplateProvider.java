package com.alicannklc.tailwind;

import com.intellij.codeInsight.template.impl.DefaultLiveTemplatesProvider;
import org.jetbrains.annotations.Nullable;

public class TailwindTemplateProvider implements DefaultLiveTemplatesProvider {
   public String[] getDefaultLiveTemplateFiles() {
      return new String[]{"liveTemplates/Tailwind",
                          "liveTemplates/Tailwindcss-1_0_0" 
                         };
   }

   @Nullable
   public String[] getHiddenLiveTemplateFiles() {
      return new String[0];
   }
}
