package com.alicannklc.tailwind;

import com.intellij.codeInsight.template.impl.DefaultLiveTemplatesProvider;
import org.jetbrains.annotations.Nullable;

public class TailwindTemplateProvider implements DefaultLiveTemplatesProvider {
   public String[] getDefaultLiveTemplateFiles() {
      return new String[]{"liveTemplates/Tailwindcss-1_3_2"};
   }

   @Nullable
   public String[] getHiddenLiveTemplateFiles() {
      return new String[0];
   }
}
