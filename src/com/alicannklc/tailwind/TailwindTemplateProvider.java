package com.alicannklc.tailwind;

import com.intellij.codeInsight.template.impl.DefaultLiveTemplatesProvider;
import org.jetbrains.annotations.Nullable;

public class TailwindTemplateProvider implements DefaultLiveTemplatesProvider {
    public TailwindTemplateProvider() {
    }

    public String[] getDefaultLiveTemplateFiles() {
        return new String[]{"liveTemplates/Tailwind-css"};
    }

    @Nullable
    public String[] getHiddenLiveTemplateFiles() {
        return new String[0];
    }
}